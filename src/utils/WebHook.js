import {format} from 'date-fns';

export const errorWebHook = (text, logs) => {
	if (process.env.NODE_ENV === 'development') return

	fetch(`https://hooks.slack.com/services/T018GPJ9L0Z/B018HJTTGG2/${process.env.ERROR_WEBHOOK_PATH}`,{
		method: 'POST',
		body: JSON.stringify({
			"pretext": "새로운 오류가 발생했습니다.",
			"color": "danger",
			"fields": [
				{
					"title": "exhibition-client",
					"value": `발생 일시 : ${format(Date.now(), 'yyyy-MM-dd HH:mm:ss')}\n오류 메시지: ${text.replace(/^Error: /, '')}\n오류 로그: \`\`\`${JSON.stringify(logs, null, 2)}\`\`\``
				}
			]
		})
	})
};
