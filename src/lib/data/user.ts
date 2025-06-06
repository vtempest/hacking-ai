export interface User {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	role: string;
	organization: string;
	lastLogin: Date;
	securityClearance: 'Basic' | 'Advanced' | 'Expert';
	testsCompleted: number;
	vulnerabilitiesFound: number;
}

export const currentUser: User = {
	id: '1',
	name: 'Sarah Chen',
	email: 'sarah.chen@ziosec.com',
	avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
	role: 'Senior Security Engineer',
	organization: 'ZioSec Enterprise',
	lastLogin: new Date('2024-01-15T10:30:00Z'),
	securityClearance: 'Expert',
	testsCompleted: 127,
	vulnerabilitiesFound: 43
};