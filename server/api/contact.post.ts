export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, projectType, budget, description } = body

  if (!name || !email || !projectType || !description) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    })
  }

  const env = event.context.cloudflare?.env
  const webhookUrl = env?.DISCORD_WEBHOOK
  const rateLimitKv = env?.RATE_LIMIT

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK secret not configured')
    throw createError({
      statusCode: 500,
      message: 'Contact form temporarily unavailable',
    })
  }

  const clientIp = getHeader(event, 'cf-connecting-ip') || getHeader(event, 'x-forwarded-for') || 'unknown'
  const rateLimitKey = `contact:${clientIp}`

  if (rateLimitKv) {
    const recent = await rateLimitKv.get(rateLimitKey)
    if (recent) {
      const count = parseInt(recent, 10)
      if (count >= 3) {
        throw createError({
          statusCode: 429,
          message: 'Too many requests. Please try again later.',
        })
      }
      await rateLimitKv.put(rateLimitKey, String(count + 1), { expirationTtl: 3600 })
    } else {
      await rateLimitKv.put(rateLimitKey, '1', { expirationTtl: 3600 })
    }
  }

  const embed = {
    title: '📬 New Project Inquiry',
    color: 0x4f46e5,
    fields: [
      { name: 'Name', value: name, inline: true },
      { name: 'Email', value: email, inline: true },
      { name: 'Project Type', value: projectType, inline: true },
      { name: 'Budget', value: budget || 'Not specified', inline: true },
      { name: 'Description', value: description.slice(0, 1024) },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: `IP: ${clientIp}` },
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    })

    if (!res.ok) {
      console.error('Discord webhook error:', res.status, await res.text())
      throw new Error('Webhook failed')
    }

    return { success: true }
  } catch (e: any) {
    console.error('Contact form error:', e)
    throw createError({
      statusCode: 500,
      message: 'Failed to submit. Please try again.',
    })
  }
})
