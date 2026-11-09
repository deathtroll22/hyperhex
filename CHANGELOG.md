# HYPERHEX Dimension — historique des publications

## 1.19.0 — 9 novembre 2026

- Repères radiaux à six secteurs en 3D et 6D ; les portes s’alignent maintenant sur ces repères, qui tournent et se déforment avec l’arène.
- Le 5D conserve son repère et son alignement existants ; la même logique de six secteurs est maintenant cohérente entre 2D, 3D, 5D et 6D.

## 1.18.0 — 9 novembre 2026

- 1D : épaisseur des portes constante de leur apparition jusqu’à la ligne ; après le passage, elles ralentissent, restent grisées à l’écran plus longtemps, puis sortent du champ.
- Profondeur (3D) : portes espacées de façon régulière avec un intervalle augmenté ; curseur placé 10 % plus loin du centre pour mieux lire les arrivées.
- Accueil : progression réservée au temps réellement atteint, suppression des reflets aléatoires, fond étoilé mêlant formes organiques et facettes géométriques.
- Panneau plus haut et moins pointu, sans bordure horizontale, cellules de progression réduites, record sur deux lignes et bouton Jouer rectangulaire élargi.
- Portes 1D et 4D verrouillées sur six zones égales ; maximum trois zones d’écart et deux portes d’affilée dans la même zone. Le déplacement ne reboucle pas en 1D, mais reboucle bien aux bords en 4D.
- En 4D, les deux prochaines lignes à franchir prennent une teinte orange-rouge discrète qui se renforce à l’approche, pour signaler la priorité.

## 1.17.0 — 9 novembre 2026

- 1D : six portes alignées, déplacements bornés aux extrémités, sauts limités à trois emplacements, pas plus de deux portes consécutives dans la même voie. Ouvertures sans chevauchement et cadence/spacement visuel uniformes.
- 4D ligne pliée : même grille de six voies et séquences à distance bornée ; le curseur réapparaît de l’autre côté en franchissant un bord.
- 1D : le curseur reste contenu dans ses six voies et les murs gardent leur vitesse jusqu’à la ligne, puis ralentissent en s’estompant.
- Profondeur (3D) : arrivée des murs espacée à cadence temporelle régulière et légèrement plus accessible.
- Menu monochrome à formes organiques lentes, sans pulsation rythmée ; panneau hexagonal, progression six cellules, bouton Jouer et dock inférieur avec crédits et icônes.

## 1.16.0 — 7 novembre 2026

- Accueil animé avec l’arène réelle en fond, ambiance scanline et glitches discrets ; ancien visuel statique supprimé.
- Panneau d’accueil et marges simplifiés ; progression en six dimensions redessinée avec jauges lumineuses animées.

## 1.14.8 — 7 novembre 2026

- Portes du monde 1D réparties sur six emplacements fixes le long de la ligne.
- Les séquences 1D ne peuvent pas rester plus de deux portes de suite sur le même emplacement ; les autres positions sont choisies aléatoirement.
- Les ouvertures restent plus étroites que l’écart entre les emplacements, afin qu’un même point ne permette pas d’enchaîner des portes voisines sans bouger. Le 4D conserve sa grille de huit positions.

## 1.14.7 — 7 novembre 2026

- Son `paddle_hit` joué en superposition sur la boucle de jeu, sans la couper ; niveau d’effet équilibré pour préserver la continuité musicale.
- Vitesse de la boucle mise à jour uniquement lorsqu’elle change, sans réécriture audio à chaque image.

## 1.14.6 — 7 novembre 2026

- Distorsion globale et pliage du monde 4D réduits davantage, en conservant son mouvement.
- Portes 1D et 4D alignées sur huit positions fixes sans afficher de lignes-guide ; leur position est calculée en proportions de la ligne.

## 1.14.5 — 7 novembre 2026

- Effet sonore `paddle_hit.wav` joué à chaque transition au début d’un niveau. Le son est intégré au fichier HTML et suit le volume des effets.

## 1.14.4 — 7 novembre 2026

- Distorsion de la ligne pliée en 4D réduite d’environ 24 %, en conservant le mouvement du monde.
- Son de transition entre les dimensions désactivé.
- Score Game Over réduit, affiché dans une police monospace plus carrée, avec un glitch discret.
- Menu et commande de pause retirés pendant la partie ; les contrôles sont simplement neutralisés quand la fenêtre perd le focus.

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
