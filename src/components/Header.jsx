export default function Header({ total, done }) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <header className="header">
      <h1>{greeting}</h1>
      <p>Focus • Plan • Execute • Succeed</p>
      <small>
        {done} of {total} tasks completed
      </small>
    </header>
  );
}