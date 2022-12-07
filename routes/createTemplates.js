async function createMessageTemplate(template) {

  const config = {
    method: 'post',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.BUSINESS_ACCOUNT_ID}/message_templates`,
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: {
      name:  process.env.TEMPLATE_NAME_PREFIX + '_' + template.name,
      category: "TRANSACTIONAL",
      components: template.components,
      language: template.language
    }
  };

  return await axios(config)
}

module.exports = {
  listTemplates: listTemplates,
  createMessageTemplate: createMessageTemplate
};