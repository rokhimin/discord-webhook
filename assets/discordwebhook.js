
$(document).ready(function() {
    $("#send").click(function() {
    var webhookUrl = $("#webhook-url").val();
    var username = $("#username").val();
    var avatar_url = $("#avatar_url").val();
    var content = $("#content").val();
    
    function hexToDecimal(hex) {
    hex = hex.replace("#", "");
    var decimal = parseInt(hex, 16);
    return decimal;
    }
    
    var hexColor = $("#color").val();
    var decimalColor = hexToDecimal(hexColor);
    
    var author_name = $("#author_name").val();
    var author_url = $("#author_url").val();
    var author_icon = $("#author_icon").val();
    var title = $("#title").val();
    var url_title = $("#url_title").val();
    var description = $("#description").val();
    var dataImage = $("#image").val();
    var dataThumbnail = $("#thumbnail").val();
    var field_name = $("#field_name").val();
    var field_value = $("#field_value").val();
    var field_name2 = $("#field_name2").val();
    var field_value2 = $("#field_value2").val();
    var footer = $("#footer").val();
    var icon_footer = $("#icon_footer").val();
    
    $.ajax({
    type: "POST",
    url: webhookUrl,
    contentType: "application/json",
    data: JSON.stringify({
    "username": username,
    "avatar_url": avatar_url,
    "content": content,
    "embeds": [
      {
        "author": {
          "name": author_name,
          "url": author_url,
          "icon_url": author_icon
        },
        "title": title,
        "url": url_title,
        "description": description,
        "color": decimalColor.toString(),
        "fields": [
          {
            "name": field_name,
            "value": field_value,
            "inline": true
          },
          {
            "name": field_name2,
            "value": field_value2,
            "inline": true
          }
        ],
        "thumbnail": {
          "url": dataThumbnail
        },
        "image": {
          "url": dataImage
        },
        "footer": {
          "text": footer,
          "icon_url": icon_footer
        }
      }
    ]
    }),
    success: function() {
      var resultHtml = "<p>Status : 200 ok</p>";
      $("#result").append(resultHtml);
    },
    error: function(xhr, status, error) {
    $("#result").html("<p>Status: " + error + "</p>");
    }
    });
    });
    });
    