# formations-angular-level-200-template
Template of the project to work on training course level 200


#######################################
De : Evan Boissonnot <evan@boissonnot.fr>
Envoyé : vendredi 5 avril 2024 17:45



Hello tout le monde



Un grand merci pour ces 3 jours passés avec vous.



Hey, avant de récupérer les liens et fichiers, ça vous dit de me laisser une évaluation perso ? :) ça prend 1 min à peine.





Voici les documents et liens évoqués, pour continuer la formation :



1. Github

- angular vnext : https://github.com/devtobecurious/discover-angular-next

- découverte observable : https://github.com/evan-boissonnot/decouverte-observable

- découverte webpack : https://github.com/evan-boissonnot/formation-nodejs-fusebox-webpack/tree/master/webpack

- découverte ngrx : https://github.com/evan-boissonnot/discover-ngrx-angular



2. Support de cours

https://docs.google.com/document/d/1ftDqnVLwS06v4buoXpR3VGqpSeMY3yTbF0x9lRB4hpU/edit?usp=sharing



https://github.com/devtobecurious/formations-angular-level-200-template/tree/formation-orsys-03042024



Le suivi Trello :

https://trello.com/b/iRzU1LbM/orsys-formations-angular-avance-03042024



3. Questionnaire

- de satisfaction (perso) : https://forms.gle/4JSkSc88cqiwzXGZA



4. Pour échanger avec moi par la suite :

- Discord : mon pseudo evanboissonnot#3024



5. Des sites pour monter en compétences

https://angular.io/

https://medium.com/angular-in-depth

https://angular-university.io/

https://hackr.io/tutorials/learn-angular



6. Les réseaux sociaux et sites internet

- Youtube autour de la pérennisation des projets : https://www.youtube.com/channel/UCqp66V-hjf3qxXOKm_2WfFw

- Youtube autour du code, du dev : https://www.youtube.com/channel/UC5y05ktqx0qhQIj8h24WDtA

- Site perso / pro : https://evanboissonnot.fr

- Site de mon entreprise : http://devtobecurious.com/



- Développer un outil gamifié en Angular, pour suivre les formations et gagner des niveaux ?

- https://gitlab.com/evan-boissonnot/cvgamifie

> forkez le projet github et proposez moi des pull request



- Améliorer c'était quoi le contexte ?

ou le refaire en angular ?

https://github.com/evan-boissonnot/cetaitquoilecontexte

> forkez le projet github et proposez moi des pull request



Je vous souhaite un très bon week-end !





Bien cordialement
__________________________________________

Evan BOISSONNOT - Votre coach pro pour votre réussite !
Site : http://evan-boissonnot.fr


#######################################
ng new workspace-test --directory learnings/workspace-test --create-application=false
cd learnings/workspace-test; ng g app mon-appli
ng g lib ma-lib



Notes:
 - Tree shaking avec SCM & standalone
 - Supprimer SharedModule
 - Réduire Budget ("type": "initial", "maximumWarning": "500kb","maximumError": "1mb") => Très grosses applis 2Mo max !
    - comment faire un SCAM (et pas standalone=true) : HeaderComponent & HeaderModule

app.module.ts : bootstrap sert juste pour les balises utilisées directement dans index.html root. Mais app.module.ts disparait en Angular 17.

workspace
tsc

04/04/2024
Observable
 ch subscribe rééxécute entièrement la fonction
 sharereplay : mise en cache
 behaviourSubject
 fermer Observable avec complete
 http.get le fait automatiquement
 
 Thin component - Fonctions pures
 Angular Service
 Angular File
 John papa
 
 voir comment pensez service plutot que composant : youtube evan


TDD RGR - Red Green Refactor

@injectable providedIn 'root' => singleton ; qui qd pas providedIn ? (cycle de vie)
Tests : comment faire des assertions sur traitements asynchrones ? starwars-game/projects/game/src/app/features/statistics/components/list-statistics/list-statistics.component.spec.ts
"| async" et subscribe implicite : obs-vs-promise.component.html


tests unit-test/frontend

@differ
standalone: true

rxjs map : abonnement sur le next


refacto au + simple (pour l'instant : pas de : retry, catchError)

Thinompo : pas de constructo, pas de ngoninit

combineLatest

une règle d'or ngrx : toujours un seul subscribe (coté template) parent

Signal : gestionnaire d'état : BehaviourSubject : détection changement

