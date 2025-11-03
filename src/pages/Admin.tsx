import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plus, Trash2 } from 'lucide-react';

const Admin = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [strengths, setStrengths] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [profileRes, eduRes, skillsRes, strengthsRes, projectsRes] = await Promise.all([
        supabase.from('profiles').select('*').eq('user_id', user!.id).maybeSingle(),
        supabase.from('education').select('*').eq('user_id', user!.id).order('display_order'),
        supabase.from('skills').select('*').eq('user_id', user!.id).order('display_order'),
        supabase.from('strengths').select('*').eq('user_id', user!.id).order('display_order'),
        supabase.from('projects').select('*').eq('user_id', user!.id).order('display_order'),
      ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (eduRes.data) setEducation(eduRes.data);
      if (skillsRes.data) setSkills(skillsRes.data);
      if (strengthsRes.data) setStrengths(strengthsRes.data);
      if (projectsRes.data) setProjects(projectsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      full_name: formData.get('full_name') as string,
      title: formData.get('title') as string,
      bio: formData.get('bio') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      linkedin_url: formData.get('linkedin_url') as string,
      github_url: formData.get('github_url') as string,
    };

    const { error } = await supabase
      .from('profiles')
      .upsert({ ...data, user_id: user!.id });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } else {
      toast({ title: "Success", description: "Profile updated" });
      fetchData();
    }
  };

  const addEducation = async () => {
    const { error } = await supabase.from('education').insert({
      user_id: user!.id,
      degree: 'New Degree',
      institution: 'Institution Name',
      start_year: '2020',
      end_year: '2024',
      description: '',
      display_order: education.length,
    });

    if (!error) {
      fetchData();
      toast({ title: "Success", description: "Education added" });
    }
  };

  const deleteEducation = async (id: string) => {
    const { error } = await supabase.from('education').delete().eq('id', id);
    if (!error) {
      fetchData();
      toast({ title: "Success", description: "Education deleted" });
    }
  };

  const updateEducation = async (id: string, data: any) => {
    const { error } = await supabase.from('education').update(data).eq('id', id);
    if (!error) {
      toast({ title: "Success", description: "Education updated" });
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => navigate('/')}>Back to Portfolio</Button>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={saveProfile} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input id="full_name" name="full_name" defaultValue={profile?.full_name} required />
                    </div>
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" name="title" defaultValue={profile?.title} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" defaultValue={profile?.bio} rows={4} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" defaultValue={profile?.email} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" defaultValue={profile?.phone} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                      <Input id="linkedin_url" name="linkedin_url" defaultValue={profile?.linkedin_url} />
                    </div>
                    <div>
                      <Label htmlFor="github_url">GitHub URL</Label>
                      <Input id="github_url" name="github_url" defaultValue={profile?.github_url} />
                    </div>
                  </div>
                  <Button type="submit">Save Profile</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-4">
              <Button onClick={addEducation}>
                <Plus className="h-4 w-4 mr-2" /> Add Education
              </Button>
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-end">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteEducation(edu.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Degree"
                        defaultValue={edu.degree}
                        onBlur={(e) => updateEducation(edu.id, { degree: e.target.value })}
                      />
                      <Input
                        placeholder="Institution"
                        defaultValue={edu.institution}
                        onBlur={(e) => updateEducation(edu.id, { institution: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Start Year"
                        defaultValue={edu.start_year}
                        onBlur={(e) => updateEducation(edu.id, { start_year: e.target.value })}
                      />
                      <Input
                        placeholder="End Year"
                        defaultValue={edu.end_year}
                        onBlur={(e) => updateEducation(edu.id, { end_year: e.target.value })}
                      />
                    </div>
                    <Textarea
                      placeholder="Description"
                      defaultValue={edu.description}
                      onBlur={(e) => updateEducation(edu.id, { description: e.target.value })}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <p className="text-muted-foreground">Skills management coming soon...</p>
          </TabsContent>

          <TabsContent value="strengths">
            <p className="text-muted-foreground">Strengths management coming soon...</p>
          </TabsContent>

          <TabsContent value="projects">
            <p className="text-muted-foreground">Projects management coming soon...</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
