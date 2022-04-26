import {useSession} from 'next-auth/client';

export default function Profile(){
  const [session,loading] = useSession();
  if(loading) return <p>Loading...</p>
  if(!session) return <p>You are not authenticated</p>
  return <p>Yout are authenticated</p>
}