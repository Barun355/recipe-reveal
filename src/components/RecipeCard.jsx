import { Star, Clock, Flame } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback';



export function RecipeCard({ recipe, onClick, featured = false }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{ 
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)'
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={recipe.prevImage}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-['Lato'] font-semibold"
          style={{
            backgroundColor: 'var(--brand-primary)',
            color: 'var(--bg-primary)'
          }}
        >
          {recipe.category}
        </div>
        
        {/* High Protein Badge */}
        {recipe.isHighProtein && (
          <div 
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-['Lato'] font-semibold flex items-center gap-1"
            style={{
              backgroundColor: 'var(--color-success)',
              color: 'var(--bg-primary)'
            }}
          >
            <Flame className="w-3 h-3" />
            High Protein
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 
          className="font-['Poppins'] font-medium mb-2 line-clamp-1"
          style={{ 
            color: 'var(--text-primary)',
            fontSize: featured ? '1.125rem' : '1rem'
          }}
        >
          {recipe.name}
        </h3>

        <p 
          className="font-['Lato'] text-sm mb-3 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" style={{ color: '#FFB74D' }} />
            <span className="text-sm font-['Lato']" style={{ color: 'var(--text-primary)' }}>
              {recipe.rating}
            </span>
            <span className="text-xs font-['Lato']" style={{ color: 'var(--text-secondary)' }}>
              ({recipe.reviews})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
              <span className="text-sm font-['Lato']" style={{ color: 'var(--text-primary)' }}>
                {recipe.cookTime}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
              <span className="text-sm font-['Lato']" style={{ color: 'var(--text-primary)' }}>
                {recipe.calories} cal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
