async function handleUrlTiktok(message) {
    if (message.author.bot) return; // ignora los mensajes mandados por bots

    const patron = /https?:\/\/(?:[a-z]+\.)?tiktok\.com\/@[^/]+\/video\/\d+|https?:\/\/vt\.tiktok\.com\/[^\/?]+/gi; // expresion regular para detectar enlaces de tiktok
    const match = message.content.match(patron); // busca coincidencias con la URL de tiktok

    if (match) {
        const modifiedURL = match[0].replace('tiktok', 'tnktok'); // modifica el dominio de la URL encontrada

        // envia un mensaje con la URL modificada  
        await message.reply({content: modifiedURL });

        setTimeout(async() => {
            try {
                // suprime el embed del mensaje original despues de un retraso
                await message.suppressEmbeds(true);
            } catch (error) {
                console.error("error suprimiendo embed:",  error)
            }
        }, 2000); // retraso de 2 segundos para eliminar el embed
    }
    
};

module.exports = { handleUrlTiktok };