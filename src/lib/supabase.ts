export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

// Gen types for supabase
//
// npx supabase gen types typescript --project-id "fjalaldupduxpjneeqht" --schema public > src/lib/supabase.ts

export interface Database {
	public: {
		Tables: {
			comment_likes: {
				Row: {
					comment_id: number | null;
					created_at: string | null;
					id: number;
					user_id: string | null;
				};
				Insert: {
					comment_id?: number | null;
					created_at?: string | null;
					id?: number;
					user_id?: string | null;
				};
				Update: {
					comment_id?: number | null;
					created_at?: string | null;
					id?: number;
					user_id?: string | null;
				};
			};
			comments: {
				Row: {
					content: string;
					created_at: string;
					email: string;
					id: number;
					post_id: number;
					user_id: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					email: string;
					id?: number;
					post_id: number;
					user_id: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					email?: string;
					id?: number;
					post_id?: number;
					user_id?: string;
				};
			};
			likes: {
				Row: {
					id: number;
					likes: number;
				};
				Insert: {
					id?: number;
					likes?: number;
				};
				Update: {
					id?: number;
					likes?: number;
				};
			};
			posts: {
				Row: {
					content: string;
					created_at: string;
					email: string;
					id: number;
					post_creator_id: string;
					title: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					email: string;
					id?: number;
					post_creator_id: string;
					title: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					email?: string;
					id?: number;
					post_creator_id?: string;
					title?: string;
				};
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			install_available_extensions_and_test: {
				Args: Record<PropertyKey, never>;
				Returns: boolean;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
