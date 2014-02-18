package weather;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import com.google.gson.Gson;

public class Weather {
	public static void main(String[] args) {
		String jsonData = null;
		try {
			URL url = new URL("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139");
			URLConnection conn = url.openConnection();
			InputStream in = conn.getInputStream();
			InputStreamReader inReader= new InputStreamReader(in);
			BufferedReader bufReader = new BufferedReader(inReader);
			while ( true ) {
				jsonData = bufReader.readLine();
				if( bufReader.readLine() == null ) {
					break;
				}
			}
    } catch (Exception e) {
    	e.printStackTrace();
    }
		System.out.println(jsonData);
  }
}
