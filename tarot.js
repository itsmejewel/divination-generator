let meaningDisplay;
let cardsWrapper = document.querySelectorAll('.cards');

function flip() {
    [...cardsWrapper].forEach((card) => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
}

document.getElementById("card").style.fontFamily = "Antonio";
document.getElementById("meaning").style.fontFamily = 'Azeret Mono', monospace;

function generate() {

    const tarotCard = {
        '0 The Fool ': 'innocence, new beginnings, clear conscience',

        'I The Magician ': 'willpower, adroitness, creation, manifestation, construction',
        
        'II The High Priestess ' : 'intuition, the unconscious, clairvoyance, premonition, perceptivity, inner voice',
        
        'III The Empress ': 'motherhood, fertility, nurture, creativity',
        
        'IV The Emperor ': 'authority, government, structure, control, fatherhood',
        
        'V The Hierophant ': 'tradition, conformity, morality, ethics, institutionalism',
        
        'VI The Lovers ': 'partnerships, duality, union',
        
        'VII The Chariot ': 'direction, control, willpower, victory, jurisdiction',
        
        'VIII Strength ': 'inner strength, bravery, compassion, force, security, fortitude',
        
        'IX The Hermit ': 'contemplation, search for truth, inner guidance, wisdom, mentorship',
        
        'X The Wheel of Fortune ': 'change, cycles, inevitable fate, luck',
        
        'XI Justice ': 'cause and effect, clarity, truth, equilibrium, legality',
        
        'XII The Hanged Man ': 'self-sacrifice, release, suspension, prophesy, grace',
        
        'XIII Death ': 'end of cycle, beginnings, transformation, morality, suffering, metamorphosis',
        
        'XIV Temperance ': 'middle of path, patience, finding meaning, attune, balance',
        
        'XV The Devil ': 'addiction, materialism, playfulness, temptation, seduction',
        
        'XVI The Tower ': 'sudden upheaval, broken pride, ego, catastrophe',
        
        'XVII The Star ': 'hope, faith, rejuvenation, visionary',
        
        'XVIII The Moon ': 'unconscious, illusions, intuition, reflection',
        
        'XIX The Sun ': 'joy, attainment, celebration, positivity',
        
        'XX Judgment ': 'reflection, reckoning, awakening, spiritual realization',
        
        'XXI The World ': 'fulfillment, harmony, completion',
        
        'Knight of Wands ' : 'action, adventure, fearlessness',
        
        'King of Wands ' : 'the big picture, leader, overcoming challenges',
        
        'Queen of Wands ' : 'courage, determination, joy',
        
        'Page of Wands ' : 'exploration, excitement, freedom',
        
        'Ace of Wands ' : ' creation, willpower, inspiration',
        
        'Two of Wands ' : ' planning, making decisions, leaving home',
        
        'Three of Wands ' : 'looking ahead, expansion, rapid growth',

        'Four of Wands ' : 'community, home, celebration',
         
        'Five of Wands ' : 'competition, rivalry, conflict',

        'Six of Wands ' : 'victory, success, public reward',

        'Seven of Wands ' : 'perseverance, defensive, maintaining control', 

        'Eight of Wands ' : 'rapid action, movement, quick decisions',
        
        'Nine of Wands ' : 'resilience, grit, last stand',
        
        'Ten of Wands ' : 'accomplishment, responsibility, burden',

        'Knight of Cups ' : 'following the heart, idealist, romantic', 
        
        'King of Cups ' : 'compassion, control, balance', 
        
        'Queen of Cups ' : 'compassion, calm, comfort',
        
        'Page of Cups ' : 'happy surprise, dreamer, sensitivity',
        
        'Ace of Cups ' : 'new feelings, spirituality, intuition', 
        
        'Two of Cups ' : 'unity, partnership, connection',
        
        'Three of Cups ' : 'friendship, community, happiness', 
        
        'Four of Cups ' : 'apathy, contemplation, disconnectedness',
        
        'Five of Cups ' : 'loss, grief, self-pity',

        'Six of Cups ' : 'familiarity, happy memories, healing',
        
        'Seven of Cups ' : 'searching for purpose, choices, daydreaming',

        'Eight of Cups ' : 'walking away, disillusionment, leaving behind',

        'Nine of Cups ' : 'satisfaction, emotional, stability, luxury',

        'Ten of Cups ' : 'inner happiness, fulfillment, dreams coming true',

        'Knight of Swords ' : 'action, impulsiveness, defending beliefs', 

        'King of Swords ' : 'head over heart, discipline, truth',

        'Queen of Swords ' : 'complexity, perceptiveness, clear mindedness',

        'Page of Swords ' : 'curiosity, restlessness, mental energy',

        'Ace of Swords ' : 'breakthrough, clarity, sharp mind',

        'Two of Swords ' : 'difficult choices, indecision, stalemate',

        'Three of Swords ' : 'heartbreak, suffering, grief',

        'Four of Swords ' : 'rest, restoration, contemplation',

        'Five of Swords ' : 'unbridled ambition, win at all costs, sneakiness',
        
        'Six of Swords ' : 'transition, leaving behind, moving on',
        
        'Seven of Swords ' : 'deception, trickery, tactics and strategy',
        
        'Eight of Swords ' : 'imprisonment, entrapment, self-victimization',

        'Nine of Swords ' : 'anxiety, hopelessness, trauma', 

        'Ten of Swords ' : 'failure, collapse, defeat',

        'Knight of Pentacles ' : 'efficiency, hard work, responsibility',

        'King of Pentacles ' : 'abundance, prosperity, security',

        'Queen of Pentacles ' : 'practicality, comforts, financial security',

        'Page of Pentacles ' : 'ambition, desire, diligence',

        'Ace of Pentacles ' : 'opportunity, prosperity, new venture',

        'Two of Pentacles ' : 'balancing decisions, priorities, adapting to change',

        'Three of Pentacles ' : 'teamwork, collaboration, building',

        'Four of Pentacles ' : 'conservation, frugality, security',

        'Five of Pentacles ' : 'need, poverty, insecurity',

        'Six of Pentacles ' : 'charity, generosity, sharing',

        'Seven of Pentacles ' : 'hard work, perseverance, diligence',

        'Eight of Pentacles ' : 'apprenticeship, passion, high standards',

        'Nine of Pentacles ' : 'fruits of labor, rewards, luxury',

        'Ten of Pentacles ' : 'legacy, culmination, inheritance',
    }

    const meanings = Object.keys(tarotCard);

    const cardDisplay = meanings[Math.floor(Math.random() * meanings.length)];

    meaningDisplay = tarotCard[cardDisplay];
    document.getElementById('meaning').innerHTML = meaningDisplay;

    document.getElementById('card').innerHTML = cardDisplay;

}