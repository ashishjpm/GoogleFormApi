function postContactToGoogle() {
        var email = $('#Email').val();
            $.ajax({
                url: "https://docs.google.com/forms/d/1jtXcvrvOxqOgsJ2DhFEY-WDf6ySHknyusnZpGU8MNtU/formResponse",
                data: { "entry_2001510779": email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("ThankYou.html");
                    },
                    200: function () {
                        window.location.replace("ThankYou.html");
                    }
                }
            });
}