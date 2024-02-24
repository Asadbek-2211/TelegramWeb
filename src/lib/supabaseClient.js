import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rxbnbruxckxxzkmfykyi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Ym5icnV4Y2t4eHprbWZ5a3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1OTUxNjcsImV4cCI6MjAyNDE3MTE2N30.vA4OBdY91EKrRrVLz-qkytFZYxHbxDfcVwopvcY4KSA')