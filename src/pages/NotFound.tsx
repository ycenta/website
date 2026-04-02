// src/pages/NotFound.tsx
export function NotFound() {
  return (
    <div className="text-center mt-16 page-header">
      <h1 className="text-6xl text-red-500">404 - Page introuvable</h1>
      <p className="text-xl mt-4">
        Cette page n'existe pas ou plus.
      </p>
      <a href="/" className="mt-4 inline-block y2k-link">
        Retour à l'accueil
      </a>
    </div>
  );
}