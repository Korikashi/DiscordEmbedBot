async function handleUrlInstagram(message) {
    if (message.author.bot) return; // ignora los mensajes mandados por bots

    const patron = /(https?:\/\/(?:[a-z]+\.)?instagram\.com\/(?:p|reel)\/[a-zA-Z0-9_-]+)/i;  // expresion regular para detectar si al publicacion es de tipo imagen o de tipo video corto
    const match = message.content.match(patron); // busca coincidencias con la URL de Instagram

    if (match) {
         const modifiedURL = match[0].replace(/^https?:\/\/(?:[a-z]+\.)?instagram\.com/, 'https://kkinstagram.com'); // modifica el dominio de la URL encontrada

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

module.exports = { handleUrlInstagram };