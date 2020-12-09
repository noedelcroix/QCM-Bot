const discord = require("discord.js");
const fs = require('fs');
const emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];

const shuffle = (arr) => {
    var j, temp;
    let arr2 = [...arr];
    for (var i = arr2.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr2[j];
        arr2[j] = arr2[i];
        arr2[i] = temp;
    }
    return arr2;
}

class discordBot {
    client = new discord.Client();

    constructor() {
        fs.readFile("./tokens.json", (err, data) => {
            if (err) throw err;
            const discordToken = JSON.parse(data).discordToken;

            this.client.once("ready", () => {
                this.client.on("message", msg => {
                    if (!msg.author.bot) {
                        if (msg.content.toLowerCase().includes("!qcm")) {
                            console.log("!qcm");
                            return this.QCM(msg);
                        } else if (msg.content.toLowerCase().includes("!add-qcm")) {
                            console.log("!add-qcm");
                            return this.addQCMQuestion(msg);
                        } else if (msg.content.toLowerCase().includes("!help")) {
                            console.log("!help-qcm");
                            return this.help(msg);
                        } else if (msg.content.toLowerCase().includes("!stop")) {
                            console.log("!stop");
                            msg.channel.send("Le bot va être redémarré...");
                            this.client.destroy();
                            this.client.login(discordToken);
                        }
                    }
                })
            })

                .login(discordToken);
        });
    }

    addQCMQuestion = (commandeInit) => {
        commandeInit.reply(new discord.MessageEmbed().setColor("RANDOM").setTitle("Quelle est la question du QCM ?")).then(() => {
            return commandeInit.channel.awaitMessages((questionQCM) => questionQCM.author.id === commandeInit.author.id, { max: 1 })
        }).then(questionQCM => {
            let QCM = { reponses: [] };

            QCM.question = questionQCM.first().content;

            return { questionQCM, QCM };
        }).then((QCMObject) => {
            return QCMObject.questionQCM.first().reply(new discord.MessageEmbed().setColor("RANDOM").setTitle("Tapes les différentes réponses, mets :white_check_mark: dans le message de la bonne réponse et termine en tapant !finish.")).then(
                () => {
                    return QCMObject
                });
        })
            .then((QCMObject) => {
                const collector = QCMObject.questionQCM.first().channel.createMessageCollector((reponsesQCM) => reponsesQCM.author.id === QCMObject.questionQCM.first().author.id).on("collect", answer => {
                    if (answer.content.toLowerCase().includes("!finish")) {
                        collector.stop();
                    } else if (answer.content.toLowerCase().includes(":white_check_mark:") || answer.content.toLowerCase().includes("✅")) {
                        QCMObject.QCM.reponses.unshift(answer.content.replace(":white_check_mark:", "").replace("✅", "").trim());
                    } else {
                        QCMObject.QCM.reponses.push(answer.content.trim());
                    }
                }).on("end", (reponsesQCM) => {
                    fs.readFile('QCM.json', function (err, data) {
                        var json = JSON.parse(data)
                        json.push(QCMObject.QCM);

                        fs.writeFile("QCM.json", JSON.stringify(json), (error) => {
                            if (err) throw err;

                            let finaleMessage = new discord.MessageEmbed().setColor("RANDOM").setTitle("Votre question a bien été enregistrée :").setDescription(QCMObject.QCM.question);

                            QCMObject.QCM.reponses.forEach((reponse, index) => {
                                if (index === 0) {
                                    finaleMessage.addField("Réponse " + (index + 1) + " ✅ :", reponse);
                                } else {
                                    finaleMessage.addField("Réponse " + (index + 1) + " :", reponse);
                                }

                            });

                            QCMObject.questionQCM.first().reply(finaleMessage);
                        })
                    })
                })
            })
    }

    QCM = (commandeInit) => {
        commandeInit.reply(new discord.MessageEmbed().setColor("RANDOM").setTitle(commandeInit.author.username + " a lancé un QCM.").setDescription("Les règles du jeux sont simples. Réagissez aux questions avec l'émoticone correspondant à la bonne réponse. __**Attention, vous n'avez que 10\" par question**__. Un classement sera fait à la fin du jeu. Que le meilleur gagne !")).then(() => {
            commandeInit.channel.send(new discord.MessageEmbed().setColor("RANDOM").setTitle("P.S...").setDescription("Il est possible à tout moment du jeu de stopper le jeu grâce à la commande **!stop**.")).then(() => {
                let scores = [];
                let quizzNumber = null;
                if (commandeInit.content.match(/\d+/) !== null) {
                    quizzNumber = commandeInit.content.match(/\d+/)[0];
                }
                console.log(quizzNumber);
                this.createQCM(commandeInit, scores, quizzNumber);
            });
        })
    }

    help = (commandeInit) => {
        let msg = new discord.MessageEmbed().setColor("RANDOM").setTitle("Commandes :");
        msg.addField("!add-qcm", "Ajouter un QCM au bot.");
        msg.addField("!qcm", "Jouer un seul QCM.");
        msg.addField("!qcm <number>", "Jouer à <number> QCM(s).");
        msg.addField("!help", "Afficher ce message.");
        msg.addField("!stop", "Redémarrer.");
        commandeInit.reply(msg)
    }



    createQCM = (commandeInit, scores, quizzNumber = 1) => {
        const self = this;
        fs.readFile('QCM.json', function (err, data) {
            var json = JSON.parse(data);
            const emojisList = shuffle(emojis);
            let goodAnswer = -1;
            let userQueryList = [];

            const selectedData = json[Math.floor(Math.random() * (json.length))];
            console.log(selectedData);

            let queryQCM = new discord.MessageEmbed().setColor("RANDOM").setTitle(selectedData.question);

            shuffle(selectedData.reponses).forEach((reponse, index) => {
                queryQCM.addField(emojisList[index] + " Réponse " + (index + 1) + " :", reponse);

                if (reponse === selectedData.reponses[0]) {
                    goodAnswer = emojisList[index];
                }

            });

            commandeInit.channel.send(queryQCM).then((sentQueryQCM) => {
                for (let i = 0; i < selectedData.reponses.length; i++) {
                    sentQueryQCM.react(emojisList[i]);
                }

                return sentQueryQCM
            }).then((sentQueryQCM) => {
                const reactionsCollector = sentQueryQCM.createReactionCollector((reaction, user) => { return !user.bot }, { time: 10000 });
                reactionsCollector.on('collect', (reaction, user) => {
                    if (!userQueryList.includes(user.id)) {
                        userQueryList.push(user.id);
                        let userNotThere = true;

                        scores.forEach((userScore) => {
                            if (userScore.id === user.id) {
                                userNotThere = false;

                            }
                        })
                        if (userNotThere) {
                            scores.push({ id: user.id, score: 0, username: user.username });
                        }

                        if (reaction.emoji.name === goodAnswer) {
                            scores.forEach((userScore, index) => {
                                if (userScore.id === user.id) {
                                    scores[index].score += 1;

                                }
                            })
                        }

                    }
                }).on('end', () => {
                    quizzNumber--;
                    console.log(quizzNumber);
                    if (quizzNumber > 0) {
                        self.createQCM(commandeInit, scores, quizzNumber);
                    } else {
                        scores.sort((s1, s2) => s1.score - s2.score);
                        let scoresMessage = new discord.MessageEmbed().setColor("RANDOM").setTitle("Scores :");

                        scores.forEach((user, index) => {
                            scoresMessage.addField(index + 1 + ". " + user.username, user.score + " bonne(s) réponse(s).");
                        })
                        commandeInit.channel.send(scoresMessage);
                    }
                });
            })

        });
    }
}


module.exports = discordBot;
