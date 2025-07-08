import React, { useRef } from 'react';
import { Heart, MapPin, Users, Palette, Coffee, Star, Sparkles, Dice1 } from 'lucide-react';

interface Adventure {
  id: string;
  emoji: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
}

const adventures: Adventure[] = [
  {
    id: 'coffee-shop',
    emoji: '☕',
    title: 'Coffee Shop Detective',
    description: 'Visit a new coffee shop and create backstories for 3 strangers you observe.',
    category: 'solo',
    categoryColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'nature-walk',
    emoji: '🌿',
    title: 'Urban Nature Hunt',
    description: 'Find and photograph 5 different types of plants or flowers in your neighborhood.',
    category: 'outdoor',
    categoryColor: 'bg-green-100 text-green-700'
  },
  {
    id: 'recipe-roulette',
    emoji: '🍳',
    title: 'Recipe Roulette',
    description: 'Cook a dish using only ingredients that start with the same letter as your name.',
    category: 'creative',
    categoryColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 'compliment-mission',
    emoji: '💝',
    title: 'Compliment Mission',
    description: 'Give genuine compliments to 3 different people and notice how it brightens their day.',
    category: 'social',
    categoryColor: 'bg-pink-100 text-pink-700'
  },
  {
    id: 'bus-adventure',
    emoji: '🚌',
    title: 'Random Bus Adventure',
    description: 'Take a bus route you\'ve never been on and explore wherever it takes you.',
    category: 'outdoor',
    categoryColor: 'bg-green-100 text-green-700'
  },
  {
    id: 'art-walk',
    emoji: '🎨',
    title: 'Street Art Safari',
    description: 'Find and document 7 pieces of street art, murals, or interesting architecture.',
    category: 'creative',
    categoryColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 'book-roulette',
    emoji: '📚',
    title: 'Literary Time Machine',
    description: 'Go to a library, close your eyes, and pick a random book. Read the first chapter.',
    category: 'solo',
    categoryColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'sunrise-mission',
    emoji: '🌅',
    title: 'Sunrise Serenity',
    description: 'Wake up early to watch the sunrise from a new location in your city.',
    category: 'outdoor',
    categoryColor: 'bg-green-100 text-green-700'
  },
  {
    id: 'food-truck',
    emoji: '🌮',
    title: 'Food Truck Roulette',
    description: 'Try a cuisine you\'ve never had before from a local food truck or restaurant.',
    category: 'random',
    categoryColor: 'bg-yellow-100 text-yellow-700'
  },
  {
    id: 'kindness-ninja',
    emoji: '🥷',
    title: 'Kindness Ninja',
    description: 'Perform 3 anonymous acts of kindness without anyone knowing it was you.',
    category: 'social',
    categoryColor: 'bg-pink-100 text-pink-700'
  }
];

function App() {
  const adventuresRef = useRef<HTMLDivElement>(null);

  const scrollToRandomAdventure = () => {
    if (adventuresRef.current) {
      const randomIndex = Math.floor(Math.random() * adventures.length);
      const cards = adventuresRef.current.querySelectorAll('.adventure-card');
      if (cards[randomIndex]) {
        cards[randomIndex].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Add a temporary highlight effect
        cards[randomIndex].classList.add('animate-pulse');
        setTimeout(() => {
          cards[randomIndex].classList.remove('animate-pulse');
        }, 2000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-400/10 to-teal-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl sm:text-7xl">🚀</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-coral-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Tiny Quests for Big Days
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform ordinary moments into extraordinary memories with bite-sized adventures 
              that fit perfectly into your day. Life's too short for boring routines!
            </p>
            
            {/* Surprise Me Button */}
            <button
              onClick={scrollToRandomAdventure}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-coral-500 to-pink-500 rounded-full hover:from-coral-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Dice1 className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
              🎲 Surprise Me!
              <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Adventure Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={adventuresRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each micro adventure is designed to spark joy, curiosity, and connection. 
            Pick one that calls to you, or let fate decide!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="adventure-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-2">{adventure.emoji}</div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${adventure.categoryColor}`}>
                  {adventure.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-coral-600 transition-colors duration-200">
                {adventure.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {adventure.description}
              </p>
              
              <div className="flex items-center text-coral-500 font-medium group-hover:text-coral-600 transition-colors duration-200">
                <span className="mr-2">Start adventure</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Micro Adventures Section */}
      <div className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Micro Adventures?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Small adventures create big impacts on our wellbeing and perspective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Break the Routine</h3>
              <p className="text-gray-600">
                Shake up your daily patterns and discover new perspectives right in your own neighborhood
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Boost Your Mood</h3>
              <p className="text-gray-600">
                Small doses of novelty and achievement release happiness chemicals and energize your day
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Spark Curiosity</h3>
              <p className="text-gray-600">
                Cultivate wonder and mindfulness by paying attention to the world around you in new ways
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              "Every day holds a little adventure."
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Micro Adventures • Made with ❤️ for the curious souls
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;