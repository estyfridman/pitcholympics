import { GameItem } from '@/types';

const gameItems: GameItem[] = [
	{
		id: '1',
		name: 'Gold Coin',
		description: 'A shiny gold coin used as virtual currency',
		image: 'gold-coin.png',
		rarity: 'Common',
		type: 'VirtualCurrency',
		value: 10,
		quantity : 10,
	},
	{
		id: '2',
		name: 'Health Potion',
		description: 'A potion that restores health',
		image: 'health-potion.png',
		rarity: 'Uncommon',
		type: 'Consumable',
		usage: 'Drink to restore health points',
		quantity : 10,
	},
	{
		id: '3',
		name: 'Wizard Hat',
		description: 'A stylish wizard hat for your character',
		image: 'wizard-hat.png',
		rarity: 'Rare',
		type: 'CosmeticItem',
		characterId: 'wizard-character-123',
		quantity : 10,
	},
	{
		id: '4',
		name: 'Achievement Reward: Explorer',
		description: 'Reward for exploring all regions',
		image: 'explorer-reward.png',
		rarity: 'Epic',
		type: 'AchievementReward',
		achievementName: 'Explorer',
		quantity : 10,
	},
	{
		id: '5',
		name: 'Gem of Power',
		description: 'A magical gem with incredible power',
		image: 'gem-of-power.png',
		rarity: 'Legendary',
		type: 'VirtualCurrency',
		value: 1000,
		quantity : 10,
	},
	{
		id: '6',
		name: 'Speed Elixir',
		description: 'An elixir that increases movement speed',
		image: 'speed-elixir.png',
		rarity: 'Rare',
		type: 'Consumable',
		usage: 'Drink to move faster for a limited time',
		quantity : 10,
	},
	{
		id: '7',
		name: 'Sunglasses',
		description: 'Cool sunglasses for your character',
		image: 'sunglasses.png',
		rarity: 'Uncommon',
		type: 'CosmeticItem',
		characterId: 'cool-character-456',
		quantity : 10,
	},
	{
		id: '8',
		name: 'Achievement Reward: High Scorer',
		description: 'Reward for achieving a high score',
		image: 'high-scorer-reward.png',
		rarity: 'Epic',
		type: 'AchievementReward',
		achievementName: 'High Scorer',
		quantity : 10,
	},
	{
		id: '9',
		name: 'Enchanted Amulet',
		description: 'An amulet with mysterious powers',
		image: 'enchanted-amulet.png',
		rarity: 'Rare',
		type: 'CosmeticItem',
		characterId: 'mystical-character-789',
		quantity : 10,
	},
	{
		id: '10',
		name: 'Achievement Reward: Collector',
		description: 'Reward for collecting a variety of items',
		image: 'gold-coin.png', //'collector-reward.png',
		rarity: 'Epic',
		type: 'AchievementReward',
		achievementName: 'Collector',
		quantity : 10,
	},
];

export default gameItems;
