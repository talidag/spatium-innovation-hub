import "./Blog.scss";
import glasses from "../../assets/glasses.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import man from "../../assets/man.svg";
import clock from "../../assets/clock.svg";
import comment from "../../assets/comment.svg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      type: "Uncategorized",
      author: "Masiyer Dakol",
      date: "April 6,2020",
      comments: "2 Comments",
      title: "Impact of Accessibility of Handy Services",
      description:
        "Take a deep breath and Imagine yourself in a world where you wake up at 7:30am and have to be at work by 8:00am but the sad part is that you live in Nigeria's commercial hub and traffic is now your extra- curricular activity.",
    },
    {
      id: 2,
      image: blog2,
      type: "Uncategorized",
      author: "Masiyer Dakol",
      date: "April 6,2020",
      comments: "2 Comments",
      title: "Impact of Accessibility of Handy Services",
      description:
        "Take a deep breath and Imagine yourself in a world where you wake up at 7:30am and have to be at work by 8:00am but the sad part is that you live in Nigeria's commercial hub and traffic is now your extra- curricular activity.",
    },
  ];
  return (
    <section className="blog__section">
      <div className="blog__title">
        <img src={glasses} alt="" />
        <h1>Blog</h1>
      </div>
      <div className="blogs__container">
        {blogs.map((blog) => {
          const {
            id,
            image,
            type,
            author,
            date,
            comments,
            title,
            description,
          } = blog;
          return (
            <div className="blog" key={id}>
              <div className="blog__type">{type}</div>
              <img src={image} alt="" />
              <div className="blog__text">
                <div className="blog__info">
                  <div className="blog__info__container">
                    <img src={man} alt="" />
                    <p>{author}</p>
                  </div>
                  <div className="blog__info__container">
                    <img src={clock} alt="" />
                    <p>{date}</p>
                  </div>

                  <div className="blog__info__container">
                    <img src={comment} alt="" />
                    <p>{comments}</p>
                  </div>
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
