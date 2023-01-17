export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string | null
          email: string
          id: number
          post_id: number
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          email: string
          id?: number
          post_id: number
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          email?: string
          id?: number
          post_id?: number
          user_id?: string | null
        }
      }
      posts: {
        Row: {
          content: string
          created_at: string
          email: string
          id: number
          likes: number
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          email: string
          id?: number
          likes?: number
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          email?: string
          id?: number
          likes?: number
          title?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
