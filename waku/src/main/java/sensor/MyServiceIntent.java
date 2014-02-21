package sensor;



import android.app.Service;
import android.content.Intent;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.IBinder;
import android.util.Log;
public class MyServiceIntent extends Service implements SensorEventListener  {
	 int count = values.Step;
	 private long lastTime;
	    private float speed;
	    private float lastX;
	    private float lastY;
	    private float lastZ;
	  

	    private float x, y, z;
	    private static final int SHAKE_THRESHOLD = 800;
	  

	    private static final int AXIS_X = SensorManager.AXIS_X;
	    private static final int AXIS_Y = SensorManager.AXIS_Y;
	    private static final int AXIS_Z = SensorManager.AXIS_Z;
	  

	    private SensorManager sensorManager;
	    private Sensor accelerormeterSensor;
	   
	 @Override
	 public IBinder onBind(Intent intent) {
	  // TODO Auto-generated method stub
	  return null;
	 }

	 @Override
	 public void onCreate() {
	  // TODO Auto-generated method stub  
	  super.onCreate();
	  Log.i("MyServiceIntent","Service is Create");  //로그 찍기
	   sensorManager = (SensorManager) getSystemService(SENSOR_SERVICE);
	         accelerormeterSensor = sensorManager
	                 .getDefaultSensor(Sensor.TYPE_ACCELEROMETER);    

	     }  
	 
	@SuppressWarnings("deprecation")
	@Override
	 public int onStartCommand(Intent intent, int flags , int startId ) {
	  // TODO Auto-generated method stub
	  super.onStartCommand(intent, flags, startId);
	  Log.i("MyServiceIntent","Service is started"); 
	  

	        if (accelerormeterSensor != null)
	            sensorManager.registerListener(this, accelerormeterSensor,
	                    SensorManager.SENSOR_DELAY_GAME);
	        return  Service.START_STICKY;
	 }

	 @Override
	 public void onDestroy() {
	  // TODO Auto-generated method stub
	  super.onDestroy();    
	  Log.i("MyServiceIntent","Service is destroy");  
	  
	    if (sensorManager != null)
	             sensorManager.unregisterListener(this);
	 }

	 @Override
	 public void onAccuracyChanged(Sensor sensor, int accuracy) {
	  // TODO Auto-generated method stub
	  
	 }

	 @Override
	 public void onSensorChanged(SensorEvent event) {  //센서 변화시마다 호출되는 함수
	  // TODO Auto-generated method stub
	     if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
	             long currentTime = System.currentTimeMillis();
	             long gabOfTime = (currentTime - lastTime);
	   

	             if (gabOfTime > 100) {
	                 lastTime = currentTime;
	   

	                 x = event.values[SensorManager.AXIS_X];  //센서 좌표 가져오기
	                 y = event.values[SensorManager.AXIS_Y];;  //센서 좌표 가져오기
	                 z = event.values[SensorManager.AXIS_Z];;  //센서 좌표 가져오기
	   

	                 speed = Math.abs(x + y + z - lastX - lastY - lastZ) / gabOfTime * 10000; 
	                 //속도계산부 마지막에 흔들린 xyz를 가지고 계산함

	 

	   

	if (speed > SHAKE_THRESHOLD) {  //800보다 큰경우 흔들린경우로 간주
	                  
	Log.e("Step!", "SHAKE");  //로그찍기
	                  
	Intent myFilteredResponse = new Intent("com.androday.test.step");  //values.java
	                  
	values.Step = count++;  //스탭을 1더하기
	                
	String msg = values.Step + "" ;
	                  myFilteredResponse.putExtra("serviceData", msg);
	                  sendBroadcast(myFilteredResponse);
	                 }
	                 lastX = event.values[AXIS_X];  //가져온 값을 최종 X로 저장
	                 lastY = event.values[AXIS_Y];  //가져온 값을 최종 Y로 저장
	                 lastZ = event.values[AXIS_Z];  //가져온 값을 최종 Z로 저장
	             }
	         }

	 } 

	}






