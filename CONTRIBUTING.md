# 🎮 Contribuer à Ludokino

Merci de vouloir contribuer au site de Ludokino ! Ce guide explique comment proposer du contenu, même sans connaissances techniques.

## 📝 Proposer un article de blog

### Pour les non-développeurs (recommandé)

Vous n'avez pas besoin de Git ni de compétences en développement !

**Étapes :**

1. **Créez un compte GitHub** (gratuit) sur https://github.com si vous n'en avez pas
2. **Ouvrez une Issue** sur le dépôt : https://github.com/Teloru/ludokino/issues/new/choose
3. **Sélectionnez "📝 Nouvel article de blog"**
4. **Remplissez le template** avec votre contenu
5. **Soumettez !** On review et publie votre article

### Format des articles

Les articles utilisent le **Markdown**, un format simple pour écrire du texte stylisé :

```markdown
# Titre principal
## Sous-titre

Du texte normal avec du **gras** et de l'*italique*.

- Liste à puces
- Deuxième élément

1. Liste numérotée
2. Deuxième élément

[Un lien](https://ludokino.fr)
```

### Informations requises

Chaque article doit avoir :
- **Titre** : Accrocheur et clair
- **Auteur** : Votre pseudo/nom
- **Catégorie** : News, Tech, Gaming, Culture, ou Event
- **Excerpt** : Résumé de 1-2 phrases (max 150 caractères)

## 🔧 Pour les développeurs

Si vous maîtrisez Git, vous pouvez contribuer directement :

1. **Fork** le dépôt
2. **Créez une branche** : `git checkout -b article/mon-super-article`
3. **Ajoutez votre article** dans `src/content/blog/mon-article.md`
4. **Respectez le format** :
   ```markdown
   ---
   title: Titre de l'article
   date: 2026-03-16
   author: VotrePseudo
   category: Tech
   excerpt: Résumé court de l'article.
   ---
   
   # Contenu
   ```
5. **Commit et push** : `git commit -m "ADD: blog article about ..."`
6. **Ouvrez une Pull Request**

## 📋 Process de validation

1. Soumission via Issue ou PR
2. Review par l'équipe (contenu, orthographe, format)
3. Corrections si nécessaire
4. Publication sur le site
5. Fermeture de l'Issue/merge de la PR
