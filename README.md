https://docs.google.com/document/d/1669Ag2UEVMJROwwHDtXM9LHzRA4AazZpcZ3_2tzK394/edit?tab=t.0
Problem: Hunting for a quick laugh means bouncing between sites, losing track of good jokes, and no place to save favorites.  
Solution: QuipQuick is a single-page app that fetches a random joke on demand, lets you star the ones you love, and view your personal collection later

Features & Tools/Technologies  
  Random Joke Fetch
    What: “Tell me a joke” button loads a fresh joke.  
    Tools
      HTML/CSS button  
      Vanilla JS `fetch()` to Official Joke API (https://official-joke-api.appspot.com/jokes/random)  
  Favorite Toggle
    What: Tap the ❤️ icon on any joke card to add/remove it from “My Quips.”
    Tools:
      JavaScript click handler to update an array of favorites  
      Persistence via `localStorage`  
  Favorites View
    What: Switch to “My Quips” to browse saved jokes and remove entries.  
    Tools
      Simple JavaScript view-toggle (hide/show sections or use URL hash routing)
      Render list from `localStorage`
  Responsive UI 
    What: Clean, mobile-first card layout with thumb-friendly controls.  
    Tools: CSS (Flexbox/Grid)


Timeline & Team Roles  
  April 24
    Initialize GitHub repo and folder structure
    Scaffold HTML layout and base CSS styles
  April 27
    Implement “Tell me a joke” button
    Fetch and display a joke from the Official Joke API
  April 29
    Add ❤️ favorite-toggle logic on each joke card
    Persist starred jokes in localStorage
  May 1
    Build “My Quips” view to list saved jokes
    Enable removal of starred jokes from that view
  May 2
    Final polish: responsive/mobile testing and accessibility checks
    Write README with setup & usage instructions
    Prepare demo materials (screenshots or slides)


