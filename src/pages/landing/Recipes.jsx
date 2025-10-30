import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { recipes } from '../../utils/data';
import { RecipeCard } from '../../components/RecipeCard';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { isMobile } from '../../utils';
import { useNavigate } from 'react-router-dom';


export function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(['Vegan', 'Non-Veg', 'Other']);
  const [selectedPopularity, setSelectedPopularity] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const togglePopularity = (option) => {
    setSelectedPopularity(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const toggleSortBy = (option) => {
    setSelectedSortBy(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const onRecipeClick = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  }

  const filteredAndSortedRecipes = useMemo(() => {
    let filtered = recipes.filter(recipe => {
      // Category filter
      if (!selectedCategories.includes(recipe.category)) return false;

      // Search filter
      if (searchQuery && !recipe.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Popularity filter
      if (selectedPopularity.length > 0) {
        if (selectedPopularity.includes('Most Liked') && recipe.rating < 4.7) return false;
        if (selectedPopularity.includes('Most Viewed') && recipe.reviews < 250) return false;
      }

      return true;
    });

    // Sorting
    if (selectedSortBy.includes('Rating (high to low)')) {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSortBy.includes('Rating (low to high)')) {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (selectedSortBy.includes('Views (high to low)')) {
      filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (selectedSortBy.includes('Views (low to high)')) {
      filtered.sort((a, b) => a.reviews - b.reviews);
    }

    return filtered;
  }, [searchQuery, selectedCategories, selectedPopularity, selectedSortBy]);

  const recipesByCategory = useMemo(() => {
    const grouped = {
      'Vegan': [],
      'Non-Veg': [],
      'Other': []
    };

    filteredAndSortedRecipes.forEach(recipe => {
      grouped[recipe.category].push(recipe);
    });

    return grouped;
  }, [filteredAndSortedRecipes]);

  useEffect(() => {
    isMobile() ? setShowFilters(false) : setShowFilters(true);
  }, [])

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="font-['Poppins'] font-semibold mb-2"
            style={{ 
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
            }}
          >
            Discover Recipes
          </h1>
          <p 
            className="font-['Lato']"
            style={{ color: 'var(--text-secondary)' }}
          >
            Find the perfect recipe for your next meal
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters Sidebar */}
          <aside>
            <div 
              className="rounded-xl p-6 sticky top-24"
              style={{ 
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)'
              }}
            >
              <div className={`flex items-center justify-between ${showFilters?"mb-3": "mb-0"} lg:mb-6`}>
                <h2 
                  className="font-['Poppins'] font-medium"
                  style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}
                >
                  Filters
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
                </Button>
              </div>

              <div className={showFilters ? 'space-y-6' : 'hidden lg:block space-y-6'}>
                {/* Category Filter */}
                <div>
                  <h3 
                    className="font-['Poppins'] font-medium mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Category
                  </h3>
                  <div className="space-y-2">
                    {['Vegan', 'Non-Veg', 'Other'].map(category => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label
                          htmlFor={category}
                          className="font-['Lato'] cursor-pointer"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />

                {/* Popularity Filter */}
                <div>
                  <h3 
                    className="font-['Poppins'] font-medium mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Popularity
                  </h3>
                  <div className="space-y-2">
                    {['Most Liked', 'Most Viewed'].map(option => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox
                          id={option}
                          checked={selectedPopularity.includes(option)}
                          onCheckedChange={() => togglePopularity(option)}
                        />
                        <label
                          htmlFor={option}
                          className="font-['Lato'] cursor-pointer"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />

                {/* Sort Filter */}
                <div>
                  <h3 
                    className="font-['Poppins'] font-medium mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Rating (high to low)',
                      'Rating (low to high)',
                      'Views (high to low)',
                      'Views (low to high)'
                    ].map(option => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox
                          id={option}
                          checked={selectedSortBy.includes(option)}
                          onCheckedChange={() => toggleSortBy(option)}
                        />
                        <label
                          htmlFor={option}
                          className="font-['Lato'] cursor-pointer text-sm"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--text-secondary)' }}
                  />
                  <Input
                    type="text"
                    placeholder="Find your recipe..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-full font-['Lato']"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <Button
                  className="rounded-full px-8 font-['Lato'] font-semibold h-12"
                  style={{
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--bg-primary)'
                  }}
                >
                  Search
                </Button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['Aloo Paratha', 'Biryani', 'Paneer', 'Dal'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-4 py-2 rounded-full text-sm font-['Lato'] font-medium transition-colors"
                    style={{
                      backgroundColor: searchQuery === tag ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: searchQuery === tag ? 'var(--bg-primary)' : 'var(--text-primary)',
                      border: `1px solid ${searchQuery === tag ? 'var(--brand-primary)' : 'var(--border)'}`
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-12">
              {Object.entries(recipesByCategory).map(([category, categoryRecipes]) => {
                if (categoryRecipes.length === 0) return null;

                return (
                  <div key={category}>
                    <h2 
                      className="font-['Poppins'] font-medium mb-4"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontSize: '1.5rem'
                      }}
                    >
                      {category === 'Other' ? 'Other Meals' : category}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryRecipes.map(recipe => (
                        <RecipeCard
                          key={recipe.id}
                          recipe={recipe}
                          onClick={() => onRecipeClick(recipe)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {filteredAndSortedRecipes.length === 0 && (
                <div className="text-center py-16">
                  <p 
                    className="font-['Lato']"
                    style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}
                  >
                    No recipes found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
