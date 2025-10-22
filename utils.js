let supabaseClient = null;
function getClient() {
    if (!supabaseClient) {
        const supabaseUrl = 'https://fncuvvfcptcgdswlwfha.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuY3V2dmZjcHRjZ2Rzd2x3ZmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDIxOTAsImV4cCI6MjA3NjY3ODE5MH0.A2I7mZFZVCjrmfnb4OqQ8T8bEg63iRpflRIxEfQyfms';
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
    }
    return supabaseClient;
}
function getArgs(key) {
    const args = {};
    for (const [k, v] of new URLSearchParams(window.location.search).entries()) {
        args[k] = v;
    }
    return key ? args[key] : args;
}
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    let scriptPath = currentPath.replace(/\.html$/, '.js');
    if (!scriptPath.endsWith(".js")) scriptPath += ".js";
    const script = document.createElement('script');
    script.src = scriptPath;
    document.head.appendChild(script);
});
