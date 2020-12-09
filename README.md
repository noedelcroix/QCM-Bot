# QCM-Bot
A simple QCM bot for Discord built in JavaScript.

## Installation
1. Clone repository.
2. Install dependencies by running this command in the folder :

        npm install

3. Add credentials to [tokens.json](./tokens.json).

        {
            "discordToken": "<your-token>"
        }

4. Start bot with this command in the folder :

        npm run start

## Commands

- !add-qcm: Ajouter un QCM au bot.
- !qcm: Jouer un seul QCM.
- !qcm <number>: Jouer à <number> QCM(s).
- !help: Afficher l'aide.
- !stop: Redémarrer le bot.

## Future features
- Flag on questions to filter by theme.
- Web version.
