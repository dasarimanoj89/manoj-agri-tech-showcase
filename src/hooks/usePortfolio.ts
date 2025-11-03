import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const usePortfolio = () => {
  const [profile, setProfile] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [strengths, setStrengths] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const [profileRes, eduRes, skillsRes, strengthsRes, projectsRes] = await Promise.all([
        supabase.from('profiles').select('*').limit(1).maybeSingle(),
        supabase.from('education').select('*').order('display_order'),
        supabase.from('skills').select('*').order('display_order'),
        supabase.from('strengths').select('*').order('display_order'),
        supabase.from('projects').select('*').order('display_order'),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (eduRes.data) setEducation(eduRes.data);
      if (skillsRes.data) setSkills(skillsRes.data);
      if (strengthsRes.data) setStrengths(strengthsRes.data);
      if (projectsRes.data) setProjects(projectsRes.data);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  return { profile, education, skills, strengths, projects, loading };
};
