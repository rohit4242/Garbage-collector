import React from 'react'

const DustbinInfo = () => {
  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
  
  
  }, []);
  return (
    <div>DustbinInfo</div>
  )
}

export default DustbinInfo