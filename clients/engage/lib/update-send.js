
// const ses = require('../../../../../engage/server/conn/email/ses');
const ses = require('../ses');
const {
  CURRENT_EMAIL, root, EMAIL_SOURCE, EMAIL_TO, project,
} = require('../config');

const required = require;

exports.cmd = (e) => {
  const templateFullName = e || CURRENT_EMAIL || 'user_password';
  const [layout, template] = templateFullName.split('_');
  const emailBaseDir = `${root}/${project}/server/api/${layout}/emails`;
  const { instances } = required(`${emailBaseDir}/${template}/${template}`);

  return Promise
    .all(instances
      .map((x) => {
        const {
          group_id: groupId, Template, TemplateData, attachments, Subject,
        } = x;
        const TemplateName = `${templateFullName}_${groupId}`;

        return ses
          .updateTemplate({ Template })
          .then(() => {
            const email = {
              Source: EMAIL_SOURCE || 'notifications@cp.shoppre.com',
              Destination: {
                ToAddresses: [EMAIL_TO || 'tech.shoppre@gmail.com'],
              },
              Template: TemplateName,
              TemplateData: JSON.stringify(TemplateData),
            };

            if (attachments) {
              email.attachments = attachments;
              email.Subject = Subject;
            }

            return ses
              .sendTemplatedEmail(email);
          });
      }));
};

