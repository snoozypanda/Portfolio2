import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // 'facebook' GitHub 
        const response = await axios.get(
          "https://api.github.com/users/facebook/repos",
          {
            params: {
              sort: "updated",
              per_page: 6,
              type: "owner",
            },
          }
        );

        // Filter out forks and sort by stars
        const filteredRepos = response.data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            topics: repo.topics || [],
            stars: repo.stargazers_count,
            language: repo.language,
          }));

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem",
          fontSize: "1.2rem",
        }}
      >
        Loading repositories...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "red",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          borderRadius: "8px",
          margin: "2rem",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        My GitHub Projects
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "0 2rem",
        }}
      >
        {repos.map((repo) => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
