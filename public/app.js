// Add event listener for save button on all articles
$(document).on("click", ".save-button", function() {
    var thisId = $(this).attr("article-id");
    console.log(thisId);

    $.ajax({
        method: "GET",
        url: "/save-article/" + thisId,
    })
        .then(function() {
            console.log("Article ID: " + thisId + "has been added to your saved list.");
        });
});

// Create function to scrape articles for page
function scrapeArticles() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    })
        .then(function() {
            $("#home").click(function() {
                console.log("Articles have been scraped.");
            });
        });

};

// Create function to clear articles from the page
function clearArticles() {
    $.ajax({
        method: "GET",
        url: "/articles/clear",
    })
        .then(function() {
            console.log("All articles have been cleared from the page.");
        });
    $("#articles-container").empty();
};

// Add event listeners to scrape and clear articles from page
$("#clear").on("click", clearArticles);
$("#scrape").on("click", scrapeArticles);