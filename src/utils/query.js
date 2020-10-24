export const query = (body) => (
    new Promise(async (resolve, reject) => {
      try {
        const query = await fetch(process.env.API_PATH, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const res = await query.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    })
);
