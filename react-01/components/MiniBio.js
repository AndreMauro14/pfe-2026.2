import Profile from './Profile';

export default function MiniBio() {
  return (
    <div className="minibio-container" style={{ border: '2px dashed gray', padding: '20px' }}>
      <Profile />
    
      <p>
        Meu nome é André Mauro, tenho 19 anos e estudo Sistemas para Internet.
      </p>
    </div>
  );
}