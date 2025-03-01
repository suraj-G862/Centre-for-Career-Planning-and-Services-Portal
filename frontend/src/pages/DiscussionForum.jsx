import { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import Thread from '../components/Thread';
import GroupChatSidebar from '../components/GroupChatSidebar';
import useThreadStore from '../api/useThreadStore';
import NewThreadInput from '../components/NewThreadInput';

const DiscussionForum = () => {

  const { loading, getThreads, threads } = useThreadStore();

  useEffect(() => {
    getThreads();
  }, [])

  return (
    <div className="flex">
      <Sidebar />

      <section className='flex flex-col'>
        {loading ? <p>Loading...</p> :
          <Thread />
        }
        <NewThreadInput />
      </section>

      <GroupChatSidebar />
    </div>
  )
}

export default DiscussionForum