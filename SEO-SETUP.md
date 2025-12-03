# Configuration SEO et Google Analytics

## Google Analytics

### 1. Créer un compte Google Analytics
1. Rendez-vous sur [Google Analytics](https://analytics.google.com/)
2. Créez une propriété pour votre site web
3. Copiez votre **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configuration dans le projet
1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre Measurement ID:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Vérification
- Le tracking est automatiquement activé en production
- Testez en local avec: `npm run build && npm start`
- Vérifiez dans Google Analytics que les pages vues sont enregistrées

---

## Google Search Console

### 1. Vérification du site
1. Accédez à [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété: `https://medjio.me`
3. Choisissez la méthode "Balise HTML"
4. Copiez le code de vérification (format: `google-site-verification=XXXXXXXX`)

### 2. Configuration dans le projet
Modifiez le fichier `app/layout.tsx` ligne 72:
```typescript
verification: {
  google: "votre-code-de-verification",
}
```

### 3. Soumettre le sitemap
1. Une fois le site vérifié, allez dans "Sitemaps"
2. Soumettez l'URL: `https://medjio.me/sitemap.xml`

---

## Fichiers SEO générés

### ✅ Sitemap.xml
- URL: `/sitemap.xml`
- Mis à jour automatiquement
- Contient toutes les pages du site avec priorités

### ✅ Robots.txt
- URL: `/robots.txt`
- Permet l'indexation de toutes les pages
- Référence le sitemap

### ✅ Métadonnées optimisées
- Balises title et description pour chaque page
- Open Graph pour les réseaux sociaux
- Twitter Cards
- Mots-clés pertinents

---

## Vérifications SEO

### Tester le SEO
```bash
# Vérifier la génération des métadonnées
npm run build

# Vérifier le sitemap
curl http://localhost:3000/sitemap.xml

# Vérifier robots.txt
curl http://localhost:3000/robots.txt
```

### Outils recommandés
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Meta Tags Checker](https://metatags.io/)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Structure des URLs

| Page | URL | Priorité |
|------|-----|----------|
| Accueil | `/` | 1.0 |
| Projets | `/work` | 0.9 |
| À propos | `/about` | 0.8 |

---

## Checklist de déploiement

- [ ] Configurer `NEXT_PUBLIC_GA_MEASUREMENT_ID` dans `.env.local`
- [ ] Déployer le site sur votre domaine
- [ ] Vérifier le site dans Google Search Console
- [ ] Soumettre le sitemap à Google
- [ ] Vérifier que Google Analytics enregistre les visites
- [ ] Tester les métadonnées avec les outils ci-dessus
- [ ] Configurer les variables d'environnement sur votre plateforme d'hébergement (Vercel, Netlify, etc.)

---

## Support

Pour toute question sur la configuration SEO, consultez:
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Google Search Console Help](https://support.google.com/webmasters)
