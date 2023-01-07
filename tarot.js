let meaningDisplay;
let cardsWrapper = document.querySelectorAll('.cards');

function flip() {
    [...cardsWrapper].forEach((card) => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
}

document.getElementById("card").style.fontFamily = "Cormorant Garamond";
document.getElementById("meaning").style.fontFamily = 'Tajawal', sans-serif;

function generate() {

    const tarotCard = {
        '0 The Fool (Upright)': 'innocence, new beginnings, free spirit',
        '0 The Fool (Reversed)' : 'recklessness, taken advantage of, inconsideration',

        'I The Magician (Upright)': 'willpower, desire, creation, manifestation',
        'I The Magician (Reversed)' : 'trickery, illusions, out of touch',
        
        'II The High Priestess (Upright)' : 'intuitive, unconscious, inner voice',
        'II The High Priestess (Reversed)' : 'lack of center, lost inner voice, repressed feelings',
        
        'III The Empress (Upright)': 'motherhood, fertility, nurture',
        'III The Empress (Reversed)' : 'dependence, smothering, emptiness, nosiness',
        
        'IV The Emperor (Upright)': 'authority, structure, control, fatherhood',
        'IV Emperor (Reversed)' : 'tyranny, rigidity, coldness',
        
        'V The Hierophant (Upright)': 'tradition, conformity, morality, ethics',
        'V The Hierophant (Reversed)' : 'rebellion, subversiveness, new approaches',
        
        'VI The Lovers (Upright)': 'partnerships, duality, union',
        'VI The Lovers (Reversed)' : 'loss of balance, one-sidedness, disharmony',
        
        'VII The Chariot (Upright)': 'direction, control, willpower',
        'VII The Chariot (Reversed)' : 'lack of control, lack of direction, aggression',
        
        'VIII Strength (Upright)': 'inner strength, bravery, compassion',
        'VIII Strength (Reversed)' : 'self doubt, weakness, insecurity',
        
        'IX The Hermit (Upright)': 'contemplation, search for truth, inner guidance',
        'IX The Hermit (Reversed)' : 'loneliness, isolation, lost your way',
        
        'X The Wheel of Fortune (Upright)': 'change, cycles, inevitable fate',
        'X The Wheel of Fortune (Reversed)' : 'no control, clinging to control, bad luck',
        
        'XI Justice (Upright)': 'cause and effect, clarity, truth',
        'XI Justice (Reversed)' : 'dishonesty, unaccountability, unfairness',
        
        'XII The Hanged Man (Upright)': 'sacrifice, release, martyrdom',
        'XII The Hanged Man (Reversed)' : 'stalling, needless sacrifice, fear of sacrifice',
        
        'XIII Death (Upright)': 'end of cycle, beginnings, change, metamorphosis',
        'XIII Death (Reversed)' : 'fear of change, holding on, stagnation, decay',
        
        'XIV Temperance (Upright)': 'middle of path, patience, finding meaning',
        'XIV Temperance (Reversed)' : 'extremes, excess, lack of balance',
        
        'XV The Devil (Upright)': 'addiction, materialism, playfulness',
        'XV The Devil (Reversed)' : 'freedom, release, restoring control',
        
        'XVI The Tower (Upright)': 'sudden upheaval, broken pride, disaster',
        'XVI The Tower (Reversed)' : 'disaster avoided, delayed disaster, fear of suffering, internal conflict',
        
        'XVII The Star (Upright)': 'hope, faith, rejuvenation',
        'XVII The Star (Reversed)' : 'faithlessness, discouragement, insecurity',
        
        'XVIII The Moon (Upright)': 'unconscious, illusions, intuition',
        'XVIII The Moon (Reversed)' : 'confusion, fear, misinterpretation',
        
        'XIX The Sun (Upright)': 'joy, success, celebration, positivity',
        'XIX The Sun (Reversed)' : 'negativity, depression, sadness',
        
        'XX Judgment (Upright)': 'reflection, reckoning, awakening',
        'XX Judgment (Reversed)' : 'lack of self awareness, doubt, self loathing',
        
        'XXI The World (Upright)': 'fulfillment, harmony, completion',
        'XXI The World (Reversed)' : 'incompletion, no closure',
        
        'Knight of Wands (Upright)' : 'action, adventure, fearlessness',
        'Knight of Wands (Reversed)' : 'anger, impulsiveness, recklessness',
        
        'King of Wands (Upright)' : 'the big picture, leader, overcoming challenges',
        'King of Wands (Reversed)' : 'impulsive, overbearing, unachievable expectations',
        
        'Queen of Wands (Upright)' : 'courage, determination, joy',
        'Queen of Wands (Reversed)' : 'selfishness, jealousy, insecurities',
        
        'Page of Wands (Upright)' : 'exploration, excitement, freedom',
        'Page of Wands (Reversed)' : 'lack of direction, procrastination, creating conflict',
        
        'Ace of Wands (Upright)' : ' creation, willpower, inspiration',
        'Ace of Wands (Reversed)' : 'lack of energy, lack of passion, boredom',
        
        'Two of Wands (Upright)' : ' planning, making decisions, leaving home',
        'Two of Wands (Reversed)' : 'fear of change, playing safe, bad planning',
        
        'Three of Wands (Upright)' : 'looking ahead, expansion, rapid growth',
        'Three of Wands (Reversed)' : 'obstacles, delays, frustration',

        'Four of Wands (Upright)' : 'community, home, celebration',
        'Four of Wands (Reversed)' : 'lack of support, transience, home conflicts',
         
        'Five of Wands (Upright)' : 'competition, rivalry, conflict',
        'Five of Wands (Reversed)' : 'avoiding conflict, respecting differences',

        'Six of Wands (Upright)' : 'victory, success, public reward',
        'Six of Wands (Reversed)' : 'excess pride, lack of recognition, punishment',

        'Seven of Wands (Upright)' : 'perseverance, defensive, maintaining control', 
        'Seven of Wands (Reversed)' : 'give up, destroyed confidence, overwhelmed',

        'Eight of Wands (Upright)' : 'rapid action, movement, quick decisions',
        'Eight of Wands (Reversed)' : 'panic, waiting, slowdown',
        
        'Nine of Wands (Upright)' : 'resilience, grit, last stand',
        'Nine of Wands (Reversed)' : 'exhaustion, fatigue, questioning motivations',
        
        'Ten of Wands (Upright)' : 'accomplishment, responsibility, burden',
        'Ten of Wands (Reversed)' : 'inability to delegate, overstressed, burnt out',

        'Knight of Cups (Upright)' : 'following the heart, idealist, romantic', 
        'Knight of Cups (Reversed)' : 'moodiness, disappointment',
        
        'King of Cups (Upright)' : 'compassion, control, balance', 
        'King of Cups (Reversed)' : 'coldness, moodiness, bad advice',
        
        'Queen of Cups (Upright)' : 'compassion, calm, comfort',
        'Queen of Cups (Reversed)' : 'martyrdom, insecurity, dependence',
        
        'Page of Cups (Upright)' : 'happy surprise, dreamer, sensitivity',
        'Page of Cups (Reversed)' : 'emotional, immaturity, insecurity, disappointment',
        
        'Ace of Cups (Upright)' : 'new feelings, spirituality, intuition', 
        'Ace of Cups (Reversed)' : 'emotional loss, blocked creativity, emptiness',
        
        'Two of Cups (Upright)' : 'unity, partnership, connection',
        'Two of Cups (Reversed)' : 'imbalance, broken communication, tension',
        
        'Three of Cups (Upright)' : 'friendship, community, happiness', 
        'Three of Cups (Reversed)' : 'overindulgence, gossip, isolation',
        
        'Four of Cups (Upright)' : 'apathy, contemplation, disconnectedness',
        'Four of Cups (Reversed)' : 'sudden awareness, choosing happiness, acceptance',
        
        'Five of Cups (Upright)' : 'loss, grief, self-pity',
        'Five of Cups (Reversed)' : 'acceptance, moving on, finding peace',

        'Six of Cups (Upright)' : 'familiarity, happy memories, healing',
        'Six of Cups (Reversed)' : 'moving forward, leaving home, independence',
        
        'Seven of Cups (Upright)' : 'searching for purpose, choices, daydreaming',
        'Seven of Cups (Reversed)' : 'lack of purpose, diversion, confusion',

        'Eight of Cups (Upright)' : 'walking away, disillusionment, leaving behind',
        'Eight of Cups (Reversed)' : 'avoidance, fear of change, fear of loss',

        'Nine of Cups (Upright)' : 'satisfaction, emotional, stability, luxury',
        'Nine of Cups (Reversed)' : 'lack of inner joy, smugness, dissatisfaction',

        'Ten of Cups (Upright)' : 'inner happiness, fulfillment, dreams coming true',
        'Ten of Cups (Reversed)' : 'shattered dreams, broken family, domestic disharmony',

        'Knight of Swords (Upright)' : 'action, impulsiveness, defending beliefs', 
        'Knight of Swords (Reversed)' : 'direction, disregard for consequences, unpredictability',

        'King of Swords (Upright)' : 'head over heart, discipline, truth',
        'King of Swords (Reversed)' : 'manipulative, cruel, weakness', 

        'Queen of Swords (Upright)' : 'complexity, perceptiveness, clear mindedness',
        'Queen of Swords (Reversed)' : 'cold hearted, cruel, bitterness',

        'Page of Swords (Upright)' : 'curiosity, restlessness, mental energy',
        'Page of Swords (Reversed)' : 'deception, manipulation, all talk',

        'Ace of Swords (Upright)' : 'breakthrough, clarity, sharp mind',
        'Ace of Swords (Reversed)' : 'confusion, brutality, chaos',

        'Two of Swords (Upright)' : 'difficult choices, indecision, stalemate',
        'Two of Swords (Reversed)' : 'lesser of two evils, no right choice, confusion',

        'Three of Swords (Upright)' : 'heartbreak, suffering, grief',
        'Three of Swords (Reversed)' : 'recovery, forgiveness, moving on',

        'Four of Swords (Upright)' : 'rest, restoration, contemplation',
        'Four of Swords (Reversed)' : 'restlessness, burnout, stress',

        'Five of Swords (Upright)' : 'unbridled ambition, win at all costs, sneakiness',
        'Five of Swords (Reversed)' : 'lingering resentment, desire to reconcile, forgiveness',
        
        'Six of Swords (Upright)' : 'transition, leaving behind, moving on',
        'Six of Swords (Reversed)' : 'emotional baggage, unresolved issues, resisting transition',
        
        'Seven of Swords (Upright)' : 'deception, trickery, tactics and strategy',
        'Seven of Swords (Reversed)' : 'coming clean, rethinking approach, deception',
        
        'Eight of Swords (Upright)' : 'imprisonment, entrapment, self-victimization',
        'Eight of Swords (Reversed)' : 'self acceptance, new perspective, freedom',

        'Nine of Swords (Upright)' : 'anxiety, hopelessness, trauma', 
        'Nine of Swords (Reversed)' : 'hope, reaching out, despair',

        'Ten of Swords (Upright)' : 'failure, collapse, defeat',
        'Ten of Swords (Reversed)' : "can't get worse, only upwards, inevitable end",

        'Knight of Pentacles (Upright)' : 'efficiency, hard work, responsibility',
        'Knight of Pentacles (Reversed)' : 'laziness, obsessiveness, work without reward',

        'King of Pentacles (Upright)' : 'abundance, prosperity, security',
        'King of Pentacles (Reversed)' : 'greed, indulgence, sensuality',

        'Queen of Pentacles (Upright)' : 'practicality, comforts, financial security',
        'Queen of Pentacles (Reversed)' : 'self-centeredness, jealousy, smothering',

        'Page of Pentacles (Upright)' : 'ambition, desire, diligence',
        'Page of Pentacles (Reversed)' : 'lack of commitment, greediness, laziness',

        'Ace of Pentacles (Upright)' : 'opportunity, prosperity, new venture',
        'Ace of Pentacles (Reversed)' : 'lost opportunity, missed chance, bad investment',

        'Two of Pentacles (Upright)' : 'balancing decisions, priorities, adapting to change',
        'Two of Pentacles (Reversed)' : 'loss of balance, disorganized, overwhelmed',

        'Three of Pentacles (Upright)' : 'teamwork, collaboration, building',
        'Three of Pentacles (Reversed)' : 'lack of teamwork, disorganized, group conflict',

        'Four of Pentacles (Upright)' : 'conservation, frugality, security',
        'Four of Pentacles (Reversed)' : 'greediness, stinginess, possessiveness',

        'Five of Pentacles (Upright)' : 'need, poverty, insecurity',
        'Five of Pentacles (Reversed)' : 'recovery, charity, improvement',

        'Six of Pentacles (Upright)' : 'charity, generosity, sharing',
        'Six of Pentacles (Reversed)' : 'strings attached, stinginess, power and domination',

        'Seven of Pentacles (Upright)' : 'hard work, perseverance, diligence',
        'Seven of Pentacles (Reversed)' : 'work without results, distractions, lack of rewards',

        'Eight of Pentacles (Upright)' : 'apprenticeship, passion, high standards',
        'Eight of Pentacles (Reversed)' : 'lack of passion, uninspired, no motivation',

        'Nine of Pentacles (Upright)' : 'fruits of labor, rewards, luxury',
        'Nine of Pentacles (Reversed)' : 'reckless spending, living beyond means, false success',

        'Ten of Pentacles (Upright)' : 'legacy, culmination, inheritance',
        'Ten of Pentacles (Reversed)' : 'fleeting success, lack of stability, lack of resources'
    }

    const meanings = Object.keys(tarotCard);

    const cardDisplay = meanings[Math.floor(Math.random() * meanings.length)];

    meaningDisplay = tarotCard[cardDisplay];
    document.getElementById('meaning').innerHTML = meaningDisplay;

    document.getElementById('card').innerHTML = cardDisplay;

}
