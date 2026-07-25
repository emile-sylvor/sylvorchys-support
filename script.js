/* =====================================================
   SYLVORCHYS SUPPORT CENTER - JAVASCRIPT
   Dynamic FAQ System with Instant Search
   ===================================================== */

// ============================================
// FAQ DATABASE - Easy to Extend
// ============================================

const faqDatabase = [
    // PHALAENOPSIS (Orchidées Papillons)
    {
        id: 1,
        category: 'Phalaenopsis',
        question: 'Comment arroser une Phalaenopsis ?',
        answer: 'Les Phalaenopsis préfèrent un arrosage modéré. Arrosez lorsque le substrat commence à sécher, généralement une fois par semaine. Utilisez de l\'eau à température ambiante et assurez-vous que le pot a des trous de drainage. Évitez de mouiller les feuilles.'
    },
    {
        id: 2,
        category: 'Phalaenopsis',
        question: 'À quelle température doit vivre une Phalaenopsis ?',
        answer: 'Les Phalaenopsis aiment les températures entre 18°C et 25°C. Elles peuvent tolérer des variations, mais évitez les extrêmes. La nuit, 15°C est acceptable. Les chocs thermiques peuvent affecter la floraison.'
    },
    {
        id: 3,
        category: 'Phalaenopsis',
        question: 'Combien de lumière une Phalaenopsis a-t-elle besoin ?',
        answer: 'Les Phalaenopsis ont besoin d\'une lumière indirecte brillante. Placez-les près d\'une fenêtre est ou ouest. Évitez la lumière directe du soleil intense qui peut brûler les feuilles. Un éclairage LED de 12-14 heures par jour convient aussi.'
    },
    {
        id: 4,
        category: 'Phalaenopsis',
        question: 'Pourquoi ma Phalaenopsis n\'a-t-elle pas de fleurs ?',
        answer: 'L\'absence de fleurs peut être due à un manque de lumière, une température trop basse la nuit, ou une humidité insuffisante. Les Phalaenopsis ont besoin d\'une différence de température jour/nuit. Assurez-vous aussi que la plante a au moins 4-5 feuilles matures.'
    },
    {
        id: 5,
        category: 'Phalaenopsis',
        question: 'Comment rempoter une Phalaenopsis ?',
        answer: 'Rempotez après la floraison ou au printemps. Utilisez un substrat spécialisé pour orchidées (écorce, mousse de sphaigne). Délicatement, retirez l\'ancienne terre des racines. Choisissez un pot légèrement plus grand avec drainage. Arrosez légèrement après rempotage.'
    },
    
    // PAPHIOPEDILUM (Orchidées Sabots)
    {
        id: 6,
        category: 'Paphiopedilum',
        question: 'Quels sont les besoins en lumière d\'un Paphiopedilum ?',
        answer: 'Les Paphiopedilum préfèrent une lumière indirecte modérée à brillante. Ils tolèrent mieux l\'ombre que les Phalaenopsis. Évitez le soleil direct qui peut bruler les feuilles. Un éclairage LED 10-12 heures par jour est idéal.'
    },
    {
        id: 7,
        category: 'Paphiopedilum',
        question: 'Comment arroser un Paphiopedilum ?',
        answer: 'Arrosez régulièrement pour que le substrat reste légèrement humide. Vérifiez que le pot a une bonne drainage. Les Paphiopedilum n\'aiment pas rester mouillés. L\'arrosage 2-3 fois par semaine est généralement suffisant selon l\'humidité de l\'air.'
    },
    {
        id: 8,
        category: 'Paphiopedilum',
        question: 'Quelle température pour un Paphiopedilum ?',
        answer: 'Les Paphiopedilum aiment les températures entre 15°C et 22°C. Ils préfèrent les environnements légèrement plus frais que les Phalaenopsis. Une baisse de température la nuit (5-10°C) aide à déclencher la floraison.'
    },
    {
        id: 9,
        category: 'Paphiopedilum',
        question: 'Comment faire refleurir un Paphiopedilum ?',
        answer: 'Pour encourager la floraison, maintenez une température plus fraîche la nuit (12-15°C), augmentez l\'humidité à 50-70%, et fournissez une lumière suffisante. Attendez 6-12 mois entre les fleurs. Un repos hivernal aide aussi.'
    },
    {
        id: 10,
        category: 'Paphiopedilum',
        question: 'Comment rempoter un Paphiopedilum ?',
        answer: 'Rempotez tous les 2 ans au printemps. Utilisez un substrat bien drainant (écorce moyenne, perlite). Séparez délicatement les pousses avec 2-3 racines chacune. Arrosez légèrement le premier mois après rempotage.'
    },
    
    // ARROSAGE
    {
        id: 11,
        category: 'Arrosage',
        question: 'Quel type d\'eau utiliser pour arroser les orchidées ?',
        answer: 'Utilisez de l\'eau douce, idéalement de l\'eau de pluie ou déminéralisée. L\'eau du robinet calcaire peut endommager les orchidées. Si vous devez utiliser l\'eau du robinet, laissez-la reposer 24h. L\'eau à température ambiante est préférable.'
    },
    {
        id: 12,
        category: 'Arrosage',
        question: 'Comment savoir si je dois arroser mon orchidée ?',
        answer: 'Vérifiez le substrat : s\'il est sec au toucher, arrosez. Soulevez le pot : un pot léger indique un besoin d\'eau. Observez les racines : les racines vertes indiquent l\'humidité, les grises/blanches indiquent la sécheresse. Ne laissez jamais sécher complètement.'
    },
    {
        id: 13,
        category: 'Arrosage',
        question: 'Dois-je arroser mes orchidées différemment en été et en hiver ?',
        answer: 'Oui, en été, arrosez plus souvent (1-2 fois par semaine). L\'évaporation est plus rapide. En hiver, réduisez la fréquence (une fois par semaine). Observez le substrat pour adapter. La plante consomme moins d\'eau en hiver.'
    },
    {
        id: 14,
        category: 'Arrosage',
        question: 'Quelle est la meilleure heure pour arroser ?',
        answer: 'Arrosez le matin si possible. Cela permet aux feuilles de sécher rapidement et réduit les risques de pourriture. Évitez d\'arroser tard le soir ou avant l\'obscurité. Utilisez de l\'eau à température ambiante ou légèrement tiède.'
    },
    {
        id: 15,
        category: 'Arrosage',
        question: 'Comment reconnaître une orchidée surhumidifiée ?',
        answer: 'Les signes incluent : feuilles jaunes et molles, pourriture des racines, développement de moisissures, et une odeur désagréable du substrat. Si c\'est le cas, réduisez l\'arrosage, augmentez la ventilation, et considérez un rempotage avec nouveau substrat.'
    },
    
    // REMPOTAGE
    {
        id: 16,
        category: 'Rempotage',
        question: 'Quand faut-il rempoter une orchidée ?',
        answer: 'Rempotez au printemps quand de nouvelles racines apparaissent, ou après la floraison. Les orchidées n\'aiment pas être rempotées trop souvent. Rempotez généralement tous les 2-3 ans ou quand le substrat commence à se décomposer.'
    },
    {
        id: 17,
        category: 'Rempotage',
        question: 'Quel substrat utiliser pour rempoter ?',
        answer: 'Utilisez un substrat spécialisé pour orchidées : écorce de pin, mousse de sphaigne, perlite, ou charbon. Vous pouvez mélanger : 50% écorce + 30% mousse + 20% perlite. Évitez la terre ordinaire qui retient trop d\'humidité.'
    },
    {
        id: 18,
        category: 'Rempotage',
        question: 'Dois-je tailler les racines lors du rempotage ?',
        answer: 'Taillez seulement les racines mortes ou pourries (marron/noir et molles). Les racines vivantes sont blanches ou vertes. Ne taillez pas les racines saines. Si une racine aérienne sort du pot, vous pouvez la laisser ou la replanter.'
    },
    {
        id: 19,
        category: 'Rempotage',
        question: 'Quelle taille de pot choisir ?',
        answer: 'Choisissez un pot légèrement plus grand (1-2 cm de diamètre). Un pot trop grand crée un excès d\'humidité. Le pot doit avoir de bons trous de drainage. Les orchidées éphytes préfèrent les pots aérés (paniers de bois ou panier spécialisé).'
    },
    {
        id: 20,
        category: 'Rempotage',
        question: 'Comment laver un pot avant rempotage ?',
        answer: 'Nettoyez le pot avec de l\'eau et une brosse douce. Vous pouvez utiliser une solution d\'eau de Javel (1 part Javel pour 10 parts d\'eau) pour désinfecter. Rincez abondamment et laissez sécher avant utilisation.'
    },
    
    // ENGRAIS
    {
        id: 21,
        category: 'Engrais',
        question: 'Quand et comment fertiliser une orchidée ?',
        answer: 'Fertilisez pendant la saison de croissance (printemps-été) une fois par semaine avec un engrais dilué pour orchidées. En hiver, réduisez à une fois par mois. Utilisez un engrais NPK équilibré (10-10-10) ou spécialisé pour orchidées.'
    },
    {
        id: 22,
        category: 'Engrais',
        question: 'Quels sont les signes de carence nutritive ?',
        answer: 'Les feuilles jaunes, une croissance lente, et une absence de floraison peuvent indiquer une carence. Les feuilles peuvent devenir pâles et les nervures rester vertes. Une carence en potassium cause des tâches sur les feuilles.'
    },
    {
        id: 23,
        category: 'Engrais',
        question: 'Puis-je suruti liser l\'engrais ?',
        answer: 'Oui, la suruti lisation d\'engrais peut brûler les racines et causer l\'accumulation de sels. Suivez toujours les instructions du fabricant. En cas de suruti lisation, rincez le pot abondamment et réduisez la concentration.'
    },
    {
        id: 24,
        category: 'Engrais',
        question: 'Quel type d\'engrais est meilleur pour les orchidées ?',
        answer: 'Les engrais liquides sont plus faciles à doser. Les orchidées préfèrent un engrais NPK équilibré ou légèrement riche en azote pendant la croissance. Utilisez un ratio 1-2-1 (azote-phosphore-potassium) ou un engrais spécialisé pour orchidées.'
    },
    
    // TEMPÉRATURE
    {
        id: 25,
        category: 'Température',
        question: 'Quelle est la plage de température idéale ?',
        answer: 'La plupart des orchidées tropicales préfèrent 18-25°C le jour et 12-18°C la nuit. Une différence de 5-10°C stimule la floraison. Les variétés tempérées comme les Dendrobiums aiment plus frais (12-20°C).'
    },
    {
        id: 26,
        category: 'Température',
        question: 'Comment protéger mes orchidées du froid ?',
        answer: 'Éloignez-les des fenêtres glaciées en hiver. Utilisez un isolant léger ou un chiffon si nécessaire. Mainttenez une température minimale de 12°C. Évitez les appareils de chauffage qui créent des appels d\'air secs.'
    },
    {
        id: 27,
        category: 'Température',
        question: 'Que faire si ma plante est exposée à des températures extrêmes ?',
        answer: 'Les chocs thermiques peuvent endommager. Après exposition au froid, restez patient. Vérifiez les racines pour la pourriture. Augmentez graduellement la température. Après exposition à la chaleur excessive, arrosez davantage.'
    },
    
    // ÉCLAIRAGE
    {
        id: 28,
        category: 'Éclairage',
        question: 'Combien d\'heures de lumière pour une orchidée ?',
        answer: 'Les orchidées ont généralement besoin de 10-14 heures de lumière par jour. Les variétés qui fleurissent en hiver préfèrent 10-12 heures. Les variétés estivales bénéficient de 12-14 heures. Un éclairage artificiel LED peut compléter la lumière naturelle.'
    },
    {
        id: 29,
        category: 'Éclairage',
        question: 'Quels sont les signes d\'un manque de lumière ?',
        answer: 'Feuilles pâles ou jaunes, croissance faible, tiges molles, absence de floraison, et nouvelles feuilles plus petites. Augmentez graduellement l\'exposition lumineuse pour éviter les brûlures. Une fenêtre lumineuse est généralement meilleure qu\'un coin sombre.'
    },
    {
        id: 30,
        category: 'Éclairage',
        question: 'Puis-je utiliser un éclairage LED pour mes orchidées ?',
        answer: 'Oui, les LED sont excellentes ! Utilisez des LED spécifiques pour plantes avec spectre rouge-bleu. Placez-les à 20-30 cm des plantes. Les LED consomment moins d\'nergie et produisent moins de chaleur. Réglez sur 12-14 heures par jour.'
    },
    
    // LIVRAISON
    {
        id: 31,
        category: 'Livraison',
        question: 'Comment préparez-vous les orchidées pour l\'expédition ?',
        answer: 'Nous emballons les orchidées avec soin dans des boîtes isolées avec protection thermique. Les racines sont enveloppées dans du papier humide. Nous incluons des instructions de soins. La livraison est optimisée pour minimiser le stress.'
    },
    {
        id: 32,
        category: 'Livraison',
        question: 'Combien de temps prend la livraison ?',
        answer: 'Les délais dépendent de votre localisation. En France métropolitaine : 2-3 jours. En Europe : 4-7 jours. Nous utilisons Chronopost et DPD pour un suivi en temps réel. Les orchidées sont expédiées lundi à jeudi pour éviter les week-ends.'
    },
    {
        id: 33,
        category: 'Livraison',
        question: 'Que faire si mon orchidée arrive endommagée ?',
        answer: 'Contactez-nous dans les 48 heures. Prenez des photos du dommage. Nous offrons un remplacement gratuit ou un remboursement. Nous assurons que votre plante arrive en parfait état. La satisfaction client est notre priorité.'
    },
    {
        id: 34,
        category: 'Livraison',
        question: 'Peut-on livrer à l\'international ?',
        answer: 'Oui, nous livrons en Europe. Les frais de port sont calculés selon le poids et la destination. Les plantes sont conformes aux régulations d\'importation. Pour l\'Amérique ou l\'Asie, contactez-nous pour un devis spécial.'
    },
    
    // COMMANDES
    {
        id: 35,
        category: 'Commandes',
        question: 'Comment passer une commande ?',
        answer: 'Visitez notre site, sélectionnez les orchidées, et procédez au paiement sécurisé. Vous recevrez une confirmation par email avec le numéro de suivi. Une équipe dédiée prépare votre commande avec soin avant l\'expédition.'
    },
    {
        id: 36,
        category: 'Commandes',
        question: 'Puis-je annuler ou modifier ma commande ?',
        answer: 'Les modifications sont possibles dans les 24 heures. Après ce délai, la commande entre en préparation. Pour les annulations, nous offrons un remboursement complet ou un crédit. Contactez notre support rapidement.'
    },
    {
        id: 37,
        category: 'Commandes',
        question: 'Comment tracker ma commande ?',
        answer: 'Vous recevrez un email avec un numéro de suivi. Suivez votre colis sur le site du transporteur. Nous envoyons aussi des mises à jour via email. Le suivi en temps réel est disponible 24h/24.'
    },
    
    // PAIEMENT
    {
        id: 38,
        category: 'Paiement',
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard, AmEx), PayPal, et les virements SEPA. Tous les paiements sont sécurisés et chiffrés. Aucune information sensible n\'est stockée sur nos serveurs.'
    },
    {
        id: 39,
        category: 'Paiement',
        question: 'Y a-t-il des frais cachés ?',
        answer: 'Non, tous les frais sont affichés avant le paiement. Le prix affiché inclut la plante et l\'emballage. Les frais de port sont calculés selon la destination. Aucun coût supplémentaire après la commande sauf taxes éventuelles.'
    },
    {
        id: 40,
        category: 'Paiement',
        question: 'Offrez-vous des programmes de fidélité ?',
        answer: 'Oui ! Les clients récurrents bénéficient de réductions. Notre programme VIP offre 10% de réduction et la livraison gratuite. Vous accumulez aussi des points à chaque achat pour des récompenses.'
    },
    
    // GARANTIE
    {
        id: 41,
        category: 'Garantie',
        question: 'Quelle est votre politique de garantie ?',
        answer: 'Toutes les orchidées bénéficient d\'une garantie de 30 jours. Si la plante meurt sans raison apparente, nous la remplaçons gratuitement. Les conditions : arrosage approprié et respect des instructions. Cette garantie est limitée aux dommages de transport.'
    },
    {
        id: 42,
        category: 'Garantie',
        question: 'Comment fonctionne la garantie ?',
        answer: 'En cas de problème, contactez-nous avec photos. Nous évaluons la situation. Si c\'est un défaut d\'emballage ou une plante défectueuse, remplacement gratuit. Pour les erreurs de soins, nous vous offrons des conseils. La garantie court 30 jours.'
    },
    {
        id: 43,
        category: 'Garantie',
        question: 'Y a-t-il une garantie de floraison ?',
        answer: 'Nous ne garantissons pas la floraison dans les 30 jours car cela dépend des conditions. Nous sélectionnons des plantes prêtes à fleurir ou en fleur. Si vous suivez nos conseils, la floraison devrait survenir selon la variété.'
    },
    
    // SYLVORCHYS (À propos)
    {
        id: 44,
        category: 'Sylvorchys',
        question: 'Qui sommes-nous ?',
        answer: 'Sylvorchys est une entreprise française spécialisée dans la culture et la vente d\'orchidées premium. Fondée en 2010, nous travaillons directement avec des producteurs d\'excellence. Notre passion : mettre les plus belles orchidées à portée de tous.'
    },
    {
        id: 45,
        category: 'Sylvorchys',
        question: 'D\'où proviennent nos orchidées ?',
        answer: 'Nous cultivons nos orchidées dans nos serres à partir de souches sélectionnées. Nous travaillons aussi avec des producteurs partenaires en France et en Europe. Toutes nos plantes sont cultivées de manière durable et éthique.'
    },
    {
        id: 46,
        category: 'Sylvorchys',
        question: 'Avez-vous un showroom physique ?',
        answer: 'Oui, notre showroom est situé à Lyon (France). Vous pouvez visiter sur rendez-vous. Nous avons une collection de 500+ variétés. Nous proposons aussi des ateliers et formations sur les orchidées.'
    },
    {
        id: 47,
        category: 'Sylvorchys',
        question: 'Offrez-vous des services de consultation ?',
        answer: 'Oui, nos experts offrent des consultations gratuites par email ou vidéo. Nous diagnostiquons les problèmes et proposons des solutions. Pour les clients régionaux, des visites à domicile peuvent être arrangées.'
    },
    
    // HYBRIDES
    {
        id: 48,
        category: 'Hybrides',
        question: 'Qu\'est-ce qu\'une orchidée hybride ?',
        answer: 'Un hybride est le résultat du croisement entre deux espèces ou plus d\'orchidées. Les hybrides combinent les meilleures caractéristiques de leurs parents : couleurs spectaculaires, robustesse, et longévité. Ils sont souvent plus faciles à cultiver.'
    },
    {
        id: 49,
        category: 'Hybrides',
        question: 'Les hybrides sont-ils plus robustes ?',
        answer: 'Oui, généralement. L\'hybridation crée une vigueur hybride - les hybrides sont souvent plus résistants aux maladies et plus faciles à cultiver. Ils s\'adaptent mieux à différents environnements. C\'est pourquoi nous les recommandons pour les débutants.'
    },
    {
        id: 50,
        category: 'Hybrides',
        question: 'Combien coûtent les orchidées hybrides ?',
        answer: 'Les hybrides de qualité coûtent entre 30€ et 150€ selon la variété et la taille. Les hybrides premium avec des fleurs rares peuvent être plus chers. Les semis sont moins chers mais prennent 3-5 ans à fleurir. Les plantes adultes fleurissent immédiatement.'
    },
    {
        id: 51,
        category: 'Hybrides',
        question: 'Quels hybrides recommanderiez-vous pour un débutant ?',
        answer: 'Nous recommandons : Phalaenopsis hybride (très robuste), Cattleya hybride (belles fleurs), Oncidium (fleurs délicates), et Paphiopedilum hybride. Ces hybrides sont forgivants, beaux, et adaptés à la maison. Ils fleurissent régulièrement avec des soins de base.'
    },
    
    // ORCHIDÉES (Général)
    {
        id: 52,
        category: 'Orchidées',
        question: 'Combien de temps vivent les orchidées ?',
        answer: 'Avec des soins appropriés, les orchidées vivent 10-20 ans. Certaines peuvent vivre plus de 50 ans ! Elles peuvent fleurir de 2 à 3 fois par an selon la variété. L\'espérance de vie dépend surtout de la qualité des soins.'
    },
    {
        id: 53,
        category: 'Orchidées',
        question: 'Comment faire refleurir une orchidée qui n\'a pas de fleurs ?',
        answer: 'Assurez-vous que la plante a 4-5 feuilles matures. Augmentez l\'humidité à 50-70%. Fournissez une lumière suffisante (10+ heures). Réduisez les arrosages légèrement l\'hiver. Une baisse de température la nuit aide. Cela peut prendre 2-6 mois.'
    },
    {
        id: 54,
        category: 'Orchidées',
        question: 'Les orchidées sont-elles des plantes d\'intérieur ou d\'extérieur ?',
        answer: 'La plupart des orchidées de collection sont d\'intérieur. Elles préfèrent un environnement contrôlé. Certaines variétés tropicales peuvent vivre dehors dans les régions chaudes. En France, l\'intérieur ou une serre est idéal. Ne les exposez pas au gel.'
    },
    {
        id: 55,
        category: 'Orchidées',
        question: 'Pourquoi ma plante n\'a que des feuilles et pas de fleurs ?',
        answer: 'Cela peut être dû à : manque de lumière, températures trop uniformes, trop d\'azote dans l\'engrais, ou âge insuffisant. Les jeunes plantes fleurissent après 2-3 ans. Augmentez la lumière, créez une baisse de température la nuit, et utilisez un engrais riche en phosphore.'
    }
];

// ============================================
// CATEGORIES CONFIGURATION
// ============================================

const categories = [
    { icon: '🌸', name: 'Orchidées', key: 'Orchidées' },
    { icon: '🪴', name: 'Entretien', key: 'Entretien' },
    { icon: '📦', name: 'Livraison', key: 'Livraison' },
    { icon: '💳', name: 'Paiement', key: 'Paiement' },
    { icon: '🧬', name: 'Hybrides', key: 'Hybrides' },
    { icon: '🏢', name: 'Sylvorchys', key: 'Sylvorchys' }
];

// ============================================
// EXTRACT UNIQUE CATEGORIES FROM FAQ
// ============================================

const uniqueCategories = [
    'Phalaenopsis',
    'Paphiopedilum',
    'Arrosage',
    'Rempotage',
    'Engrais',
    'Température',
    'Éclairage',
    'Livraison',
    'Commandes',
    'Paiement',
    'Garantie',
    'Sylvorchys',
    'Hybrides',
    'Orchidées'
];

// ============================================
// DOM ELEMENTS
// ============================================

const searchInput = document.getElementById('searchInput');
const faqAccordion = document.getElementById('faqAccordion');
const categoriesGrid = document.getElementById('categoriesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResultsDiv = document.getElementById('noResults');
const searchResultsInfo = document.getElementById('searchResults');
const popularQuestionsUL = document.getElementById('popularQuestions');
const recentQuestionsUL = document.getElementById('recentQuestions');
const faqFiltersContainer = document.querySelector('.faq-filters');

// ============================================
// STATE MANAGEMENT
// ============================================

let currentFilter = 'all';
let currentSearch = '';
let openedAccordionId = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    initializeFAQ();
    initializeSearch();
    initializePopularQuestions();
    initializeRecentQuestions();
    initializeAccessibility();
    initializeNavigation();
});

// ============================================
// INITIALIZE CATEGORIES
// ============================================

function initializeCategories() {
    categoriesGrid.innerHTML = categories
        .map(cat => `
            <div class="category-card" role="button" tabindex="0" data-category="${cat.key}" aria-label="Sélectioner la catégorie ${cat.name}">
                <span class="category-icon" aria-hidden="true">${cat.icon}</span>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${faqDatabase.filter(q => q.category === cat.key).length} questions</div>
            </div>
        `)
        .join('');

    // Add event listeners to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => filterByCategory(card.dataset.category));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                filterByCategory(card.dataset.category);
            }
        });
    });
}

// ============================================
// FILTER BY CATEGORY
// ============================================

function filterByCategory(category) {
    currentFilter = category;
    currentSearch = '';
    searchInput.value = '';
    searchResultsInfo.style.display = 'none';

    // Update filter buttons
    updateFilterButtons(category);

    // Scroll to FAQ
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });

    renderFAQ();
}

// ============================================
// INITIALIZE FAQ
// ============================================

function initializeFAQ() {
    // Create filter buttons from unique categories
    uniqueCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = cat;
        btn.textContent = cat;
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', () => {
            currentFilter = cat;
            currentSearch = '';
            searchInput.value = '';
            searchResultsInfo.style.display = 'none';
            updateFilterButtons(cat);
            renderFAQ();
        });
        faqFiltersContainer.appendChild(btn);
    });

    // Update all button
    const allBtn = faqFiltersContainer.querySelector('[data-filter="all"]');
    allBtn.addEventListener('click', () => {
        currentFilter = 'all';
        currentSearch = '';
        searchInput.value = '';
        searchResultsInfo.style.display = 'none';
        updateFilterButtons('all');
        renderFAQ();
    });

    renderFAQ();
}

// ============================================
// UPDATE FILTER BUTTONS
// ============================================

function updateFilterButtons(activeFilter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    if (activeFilter === 'all') {
        document.querySelector('[data-filter="all"]').classList.add('active');
        document.querySelector('[data-filter="all"]').setAttribute('aria-pressed', 'true');
    } else {
        const btn = document.querySelector(`[data-filter="${activeFilter}"]`);
        if (btn) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        }
    }
}

// ============================================
// RENDER FAQ
// ============================================

function renderFAQ() {
    let filteredFAQ = faqDatabase;

    // Filter by search
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredFAQ = filteredFAQ.filter(item =>
            item.question.toLowerCase().includes(searchLower) ||
            item.answer.toLowerCase().includes(searchLower) ||
            item.category.toLowerCase().includes(searchLower)
        );
    }

    // Filter by category
    if (currentFilter !== 'all') {
        filteredFAQ = filteredFAQ.filter(item => item.category === currentFilter);
    }

    // Show/hide no results
    if (filteredFAQ.length === 0) {
        faqAccordion.innerHTML = '';
        noResultsDiv.style.display = 'block';
        return;
    }

    noResultsDiv.style.display = 'none';

    // Render items
    faqAccordion.innerHTML = filteredFAQ
        .map((item) => `
            <div class="faq-item" data-id="${item.id}">
                <button 
                    class="faq-question"
                    aria-expanded="false"
                    aria-controls="answer-${item.id}"
                    id="question-${item.id}"
                    tabindex="0"
                >
                    <span>
                        <span class="faq-category">${item.category}</span>
                        ${item.question}
                    </span>
                    <span class="faq-icon" aria-hidden="true">⌄</span>
                </button>
                <div class="faq-answer" id="answer-${item.id}" role="region" aria-labelledby="question-${item.id}">
                    <div class="faq-answer-content">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `)
        .join('');

    // Add event listeners
    initializeAccordions();
}

// ============================================
// INITIALIZE ACCORDIONS
// ============================================

function initializeAccordions() {
    const allQuestions = document.querySelectorAll('.faq-question');

    allQuestions.forEach(question => {
        question.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAccordion(question);
        });

        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(question);
            }
        });
    });
}

// ============================================
// TOGGLE ACCORDION
// ============================================

function toggleAccordion(button) {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
            openItem.classList.remove('open');
            const openBtn = openItem.querySelector('.faq-question');
            openBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Toggle current item
    if (isOpen) {
        item.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
    } else {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
    }
}

// ============================================
// INITIALIZE SEARCH
// ============================================

function initializeSearch() {
    searchInput.addEventListener('input', debounce((e) => {
        currentSearch = e.target.value.trim();
        currentFilter = 'all';

        // Update filter buttons
        updateFilterButtons('all');

        renderFAQ();

        // Show search results info
        if (currentSearch) {
            const results = faqDatabase.filter(item =>
                item.question.toLowerCase().includes(currentSearch.toLowerCase()) ||
                item.answer.toLowerCase().includes(currentSearch.toLowerCase()) ||
                item.category.toLowerCase().includes(currentSearch.toLowerCase())
            );
            searchResultsInfo.textContent = `${results.length} résultat${results.length !== 1 ? 's' : ''} trouvé${results.length !== 1 ? 's' : ''}`;
            searchResultsInfo.style.display = 'block';
        } else {
            searchResultsInfo.style.display = 'none';
        }
    }, 300));
}

// ============================================
// DEBOUNCE FUNCTION
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// POPULAR QUESTIONS
// ============================================

function initializePopularQuestions() {
    // Sort by longest answer (assuming more detailed = more popular)
    const popularItems = [...faqDatabase]
        .sort((a, b) => b.answer.length - a.answer.length)
        .slice(0, 5);

    popularQuestionsUL.innerHTML = popularItems
        .map(item => `
            <li>
                <a href="#faq" data-question-id="${item.id}" role="link">
                    ${item.question}
                </a>
            </li>
        `)
        .join('');

    // Add click handlers
    document.querySelectorAll('#popularQuestions [data-question-id]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const questionId = parseInt(link.dataset.questionId);
            scrollToAndOpenQuestion(questionId);
        });
    });
}

// ============================================
// RECENT QUESTIONS
// ============================================

function initializeRecentQuestions() {
    // Last 5 items are "recent"
    const recentItems = faqDatabase.slice(-5).reverse();

    recentQuestionsUL.innerHTML = recentItems
        .map(item => `
            <li>
                <a href="#faq" data-question-id="${item.id}" role="link">
                    ${item.question}
                </a>
            </li>
        `)
        .join('');

    // Add click handlers
    document.querySelectorAll('#recentQuestions [data-question-id]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const questionId = parseInt(link.dataset.questionId);
            scrollToAndOpenQuestion(questionId);
        });
    });
}

// ============================================
// SCROLL TO AND OPEN QUESTION
// ============================================

function scrollToAndOpenQuestion(questionId) {
    // Find the item
    let item = faqAccordion.querySelector(`[data-id="${questionId}"]`);

    if (!item) {
        // Item not visible, need to reset filters
        currentSearch = '';
        currentFilter = 'all';
        searchInput.value = '';
        updateFilterButtons('all');
        renderFAQ();

        // Try again
        setTimeout(() => {
            item = faqAccordion.querySelector(`[data-id="${questionId}"]`);
            if (item) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const button = item.querySelector('.faq-question');
                setTimeout(() => toggleAccordion(button), 300);
            }
        }, 100);
    } else {
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const button = item.querySelector('.faq-question');
        if (!item.classList.contains('open')) {
            toggleAccordion(button);
        }
    }
}

// ============================================
// INITIALIZE NAVIGATION
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const section = link.dataset.section;
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Remove active from other nav links without data-section
            document.querySelectorAll('.nav-link').forEach(l => {
                if (!l.dataset.section) l.classList.remove('active');
            });
        });
    });
}

// ============================================
// ACCESSIBILITY
// ============================================

function initializeAccessibility() {
    // Skip to main content
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Keyboard navigation for links
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !['A', 'BUTTON'].includes(e.target.tagName)) {
                e.preventDefault();
                element.click();
            }
        });
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('data-')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
