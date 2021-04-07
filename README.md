# La Consigne du verre - Réseau Consigne

Ce site a pour vocation de sensibiliser les consommateurs sur les intérêts écologiques et économiques de la consigne du verre en comparaison des autres méthodes de traitement des bouteilles de verre usagées comme le recyclage ou la production de nouvelle bouteilles.

[accéder au site](https://benti.fr/laconsigneduverre)

## Contributeurs au projet

[Baptiste Bentivoglio](https://github.com/BaptisteBenti) & [Tyfannia Ranaivoson](https://github.com/tyfannianathaniel)

## Contexte du projet

...

## Installation en local

Il vous faut NodeJs pour installer ce projet en local.

1. Téléchargez le projet en récupérant l'archive sur le dépôt git ou en tapant la commande `git clone BaptisteBenti/laConsigneDeProvence` dans un terminal.
2. Installez les dépendances via la commande `npm ci`.
3. Démarrez le serveur via la commande `npm run serverstart`.
4. Accédez au projet via votre navigateur en tapant l'url `localhost:3000`

## Organisation des dossiers

- le serveur node exécute le fichier ./bin/www qui appelle le script ./app.js
- l'application est construite sur le modèle MVC

- les templates de page sont écrits en [.pug]() et stockés dans /app/views/
- le site est constitué d'une seule page, il existe qu'une seule route renvoyant la vue index.pug
- index.pug étend le template layout.pug et inclut les différentes sections de la page (/app/views/parts/{...}.pug)

- le fichier ./assets/styles/main.css est généré à partir du fichier main.sass par node-sass-middleware
- il ne faut pas éditer le .css mais uniquement le .sass sinon les modifications risques d'être perdues

- ...