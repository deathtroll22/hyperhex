# HYPERHEX Dimension — historique des publications

## 1.14.3 — 7 novembre 2026

- Game Over et score réduits pour ménager davantage d’espace sur les côtés, particulièrement sur mobile.

## 1.14.2 — 7 novembre 2026

- Score Game Over sans unité, chiffres vectoriels anguleux à sept segments.
- Ligne 1D à 78 % de la hauteur, sans changer sa sensibilité ; ligne 4D inchangée.
- Vitesse maximale mobile réduite de 10 % en 2D, 3D et 4D. Commandes ordinateur inchangées.
- Mixage des pistes via Web Audio GainNode, pour ne plus dépendre du volume des éléments média sur iPhone. Effets WAV décodés et joués via Web Audio.
- Atténuation musicale temporaire de 62 % pendant l’impact, remontée progressive sans coupure. Impact légèrement renforcé sur les appareils tactiles uniquement.
- Tests en navigateur simulé ; équilibre perceptif à confirmer sur iPhone physique.

## 1.14.1 — 7 novembre 2026

- Volume de l’impact réduit d’environ 36 % par rapport à la 1.14.0, sans changer la musique ni les autres effets.
- Luminosité du décor de défaite ramenée de 62 % à 32 % ; texte et score restent blancs.
- Ralenti immédiat de 60 %, progressant vers 82 %. Murs, rotation et animations utilisent la même horloge visuelle ralentie ; score figé et musique inchangés.
- Accélération du curseur raccourcie à 25 ms, freinage à 18 ms, inversion accélérée. Vitesse maximale inchangée.
- Le redémarrage remet le jeu à sa vitesse normale et supprime le filtre de défaite.

## 1.14.0 — 7 novembre 2026

- Accélération clavier/tactile sur 55 ms et freinage sur 45 ms ; inversion de direction rapide, vitesse maximale conservée.
- Vitesse résiduelle remise à zéro à la pause, au menu, au redémarrage et lors d’un blocage latéral. Molette conservée en déplacement direct.
- Volume des deux pistes réduit de 40 % ; effets de navigation et impact de défaite conservés, donc plus présents relativement à la musique.
- Boucles continues, vitesses musicales et Game Over de la 1.13.1 conservés.

## 1.13.1 — 7 novembre 2026

- Son paddle_blast renforcé uniquement pour la défaite ; les autres effets conservent leur niveau.
- Décor de défaite ralenti progressivement jusqu’à 22 % de sa vitesse, sans interrompre son animation ni modifier la musique.
- Marges latérales élargies, score dans une police monospace distincte et lisible.
- Glitches plus fréquents avec deux bandes de décalage superposées ; réduction des animations toujours respectée.

## 1.13.0 — 7 novembre 2026

- Game Over sans modale : lettrage vectoriel pixellisé, glitches et score agrandi.
- Décor noir et blanc, murs animés en continu dans la dimension perdue. Horloge visuelle séparée du score ; aucun gain de points ni passage de niveau après la défaite.
- HOME · SPACE agrandi et placé en haut de l’écran.
- Demande de lecture de l’intro dès l’ouverture, avec nouvel essai à l’affichage de la page. Les restrictions d’autoplay sonore des navigateurs restent applicables ; le premier geste autorise le son si nécessaire.
- Musiques continues et affectations sonores de la 1.12.0 conservées.

## 1.12.0 — 7 novembre 2026

- Premier accueil : intro_loop.mp3 en boucle à 100 %.
- Première partie : passage à battle_loop.mp3 ; cette piste reste sélectionnée jusqu’au rechargement, même en revenant à l’accueil.
- Battle continue pendant la pause, la défaite et les redémarrages, sans retour au début. Menu à 100 %, premier niveau à 115 %, puis +12 points par niveau ; défaite à 115 %.
- Collision mortelle : paddle_blast.wav. Navigation et validation : button_press.wav. Retour à l’accueil ou fermeture des réglages : beep.wav.
- Les effets audio et pistes sont intégrés au HTML pour conserver une copie locale autonome.
- Réglages verrouillés, langues et records conservés.

## 1.11.0 — 7 novembre 2026

- Numérotation unifiée : v1.11.0 dans le titre du navigateur, le menu, les notes intégrées et la copie locale.
- Practice conservé dans le code et visible dans les réglages, mais lancement et sélecteurs désactivés.
- Réglages musique, effets, thème, rotation, distorsion, réduction des animations et palette conservés mais désactivés temporairement. Le raccourci audio M est également désactivé.
- Langue anglais/français et choix des commandes toujours disponibles.
- Préférences existantes et records préservés ; aucun effacement de stockage.
- Musique battle_loop en boucle continue : 100 % au menu, 115 % au premier niveau, +12 points par niveau. Pause sans interruption. Défaite à 115 % sans retour au début. Retour au menu à 100 %. Lecture initiale soumise à l’autorisation audio du navigateur.
- Notes de version consultables dans les réglages.

## 1.10 — publication précédente

- Portes 1D plus fines à leur apparition, ouvertures élargies.
- Approche des portes 2D allongée ; transition 0,5 seconde après la dernière porte.
- Caméra libre en 3D/6D ; groupes de deux murs espacés en Ascension 6D.
- Fond de menu animé issu du visuel mobile.
- Deux corrections audio ont été publiées sous le même numéro 1.10 ; elles sont désormais documentées dans la 1.11.0.

## Convention pour les prochaines publications

Format majeur.mineur.correctif : 1.11.0. Incrémenter le mineur pour une itération fonctionnelle et le correctif pour une correction. `version.json`, le titre HTML, RELEASE et les noms de livraison doivent correspondre. L’URL principale sert toujours la version courante ; un paramètre d’URL ne sélectionne pas une ancienne version.
