'use client';

import { Container } from '@/components/Container';
import { useEffect, useState } from 'react';

export default function ApiDemo() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/test');
      const data = await res.json();

      console.log(res);
      console.log(data);

      setMsg(data.message);
    }

    fetchData();
  }, []);

  return (
    <Container showHomeButton>
      <p>{msg}</p>
    </Container>
  );
}
