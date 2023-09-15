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
      desciption:
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
      desciption:
        "Take a deep breath and Imagine yourself in a world where you wake up at 7:30am and have to be at work by 8:00am but the sad part is that you live in Nigeria's commercial hub and traffic is now your extra- curricular activity.",
    },
  ];
  return (
    <div>
      <img src={glasses} alt="" />
      <div className="blogs__container">
        {blogs.map((blog) => (
          <div className="blog">
            <div className="blog__info">
              <div className="blog__info__container">
                <img src={man} alt="" />
                <p>{blog.author}</p>
              </div>
              <div className="blog__info__container">
                <img src={clock} alt="" />
                <p>{blog.date}</p>
              </div>

              <div className="blog__info__container">
                <img src={comment} alt="" />
                <p>{blog.comments}</p>
              </div>
            </div>
            <h1>{blog.title}</h1>
            <p>{blog.desciption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
