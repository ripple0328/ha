$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Hello Panel");
    content_width = (120 + 5) * 6 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 4,
        max_size_x: 6,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather-weather" id="default-weather-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br><div data-bind="attr: {style: sub_style}">	<p class="secondary-info">Humidity:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_humidity"></p>	<p class="secondary-info">%</p>	<br>	<p class="secondary-info">Apparent Temp:&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature"></p>	<p class="secondary-info" data-bind="html: unit"></p>	<br>	<p class="secondary-info">Rain:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">&nbsp;%</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">in</p>	<br>	<p class="secondary-info">Wind:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_wind_speed"></p>	<p class="secondary-info">&nbsp;Mph</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_wind_bearing"></p>	<p class="secondary-info">&nbsp;&deg;</p>	<br>	<p class="secondary-info">Pressure:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_pressure"></p>	<p class="secondary-info">&nbsp;Mbar</p></div></div></li>', 2, 3, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-illumination-34ce00fa599b" id="default-sensor-illumination-34ce00fa599b"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-door-window-sensor-158d000120c826" id="default-binary-sensor-door-window-sensor-158d000120c826"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-motion-sensor-158d00012254b0" id="default-binary-sensor-motion-sensor-158d00012254b0"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-switch-158d000182fa7a" id="default-binary-sensor-switch-158d000182fa7a"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-gateway-light-34ce00fa599b" id="default-light-gateway-light-34ce00fa599b"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-yeelight-rgb-34ce0084e2f4" id="default-light-yeelight-rgb-34ce0084e2f4"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-plug-158d0001dc3b13" id="default-switch-plug-158d0001dc3b13"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "http://hassio.local:80", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'entity': 'clock.clock', 'title_is_friendly_name': 1})
    
        widgets["default-weather-weather"] = new baseweather("default-weather-weather", "http://hassio.local:80", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_temperature': '', 'dark_sky_humidity': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': '', 'dark_sky_wind_speed': '', 'dark_sky_pressure': '', 'dark_sky_wind_bearing': '', 'dark_sky_apparent_temperature': '', 'dark_sky_icon': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'static_icons': [], 'entity': 'weather.weather', 'title_is_friendly_name': 1})
    
        widgets["default-sensor-illumination-34ce00fa599b"] = new basedisplay("default-sensor-illumination-34ce00fa599b", "http://hassio.local:80", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.illumination_34ce00fa599b', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': '', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-binary-sensor-door-window-sensor-158d000120c826"] = new baseswitch("default-binary-sensor-door-window-sensor-158d000120c826", "http://hassio.local:80", "default", {'widget_type': 'baseswitch', 'entity': 'binary_sensor.door_window_sensor_158d000120c826', 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-bullseye', 'icon_off': 'fa-minus'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ff0055;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1})
    
        widgets["default-binary-sensor-motion-sensor-158d00012254b0"] = new baseswitch("default-binary-sensor-motion-sensor-158d00012254b0", "http://hassio.local:80", "default", {'widget_type': 'baseswitch', 'entity': 'binary_sensor.motion_sensor_158d00012254b0', 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-bullseye', 'icon_off': 'fa-minus'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ff0055;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1})
    
        widgets["default-binary-sensor-switch-158d000182fa7a"] = new baseswitch("default-binary-sensor-switch-158d000182fa7a", "http://hassio.local:80", "default", {'widget_type': 'baseswitch', 'entity': 'binary_sensor.switch_158d000182fa7a', 'state_active': 'on', 'state_inactive': 'off', 'enable': 0, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-bullseye', 'icon_off': 'fa-minus'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ff0055;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1})
    
        widgets["default-light-gateway-light-34ce00fa599b"] = new baselight("default-light-gateway-light-34ce00fa599b", "http://hassio.local:80", "default", {'widget_type': 'baselight', 'entity': 'light.gateway_light_34ce00fa599b', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.gateway_light_34ce00fa599b'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.gateway_light_34ce00fa599b'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1})
    
        widgets["default-light-yeelight-rgb-34ce0084e2f4"] = new baselight("default-light-yeelight-rgb-34ce0084e2f4", "http://hassio.local:80", "default", {'widget_type': 'baselight', 'entity': 'light.yeelight_rgb_34ce0084e2f4', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.yeelight_rgb_34ce0084e2f4'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.yeelight_rgb_34ce0084e2f4'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1})
    
        widgets["default-switch-plug-158d0001dc3b13"] = new baseswitch("default-switch-plug-158d0001dc3b13", "http://hassio.local:80", "default", {'widget_type': 'baseswitch', 'entity': 'switch.plug_158d0001dc3b13', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.plug_158d0001dc3b13'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.plug_158d0001dc3b13'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Hello Panel", widgets);

});