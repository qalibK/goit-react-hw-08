import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <h1 className={css.title}>Phonebook</h1>
        <p className={css.text}>
          Welcome to Phonebook! Dear Friends, Family, and Visitors, It gives me
          immense pleasure to extend a heartfelt welcome to each and every one of
          you who have taken the time to visit our corner of the internet. Whether
          you're a long-time acquaintance or a new friend, your presence here
          means a great deal to us. At Phonebook, we believe in the power of
          connection. This isn't just a digital space; it's a gathering place for
          ideas, inspiration, and community. Here, you'll find a tapestry of
          stories, insights, and resources crafted with care and designed to
          enrich your journey. Our journey together is one of exploration and
          learning. We're dedicated to sharing meaningful experiences and
          knowledge that resonate with our diverse audience. From practical tips
          to thought-provoking discussions, we aim to spark curiosity and foster
          growth. As you navigate through our pages, immerse yourself in the
          stories of passion, creativity, and perseverance that define us.
          Discover articles that delve into the latest trends, heartfelt personal
          reflections, and everything in between. Engage with our vibrant
          community through comments, shares, and feedback – your voice matters
          here. Beyond the content, Phonebook is about building connections that
          transcend boundaries. It's about celebrating our shared humanity and
          embracing our differences. Whether you're here for information,
          inspiration, or simply to connect, you're part of something special.
          Thank you for being here. Your presence enriches our community and
          strengthens our shared journey. Together, let's continue to explore,
          learn, and grow. Welcome home. Warm regards, Phonebook.
        </p>
      </div>
    </div>
  );
}
