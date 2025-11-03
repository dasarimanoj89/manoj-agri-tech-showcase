-- Drop the existing public read policy on profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a more restrictive policy: only authenticated users can see full profiles
CREATE POLICY "Authenticated users can view all profile fields"
  ON public.profiles FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Create a public-safe view for portfolio display (without sensitive data)
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  user_id,
  full_name,
  title,
  bio,
  avatar_url,
  -- Exclude email, phone, linkedin_url, github_url from public view
  created_at,
  updated_at
FROM public.profiles;

-- Grant access to the public view
GRANT SELECT ON public.public_profiles TO anon;
GRANT SELECT ON public.public_profiles TO authenticated;