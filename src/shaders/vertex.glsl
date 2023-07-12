uniform float uSize;
uniform float uTime; 
uniform float uSoundData;
attribute float aScale;
 

void main() 
{

    
    vec4 modelPosition = modelMatrix * vec4(position,1.0);
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz) ;
    float angleOffset = sin((1.0 / distanceToCenter )   * uTime );
    angle += angleOffset;
    modelPosition.x =  ((sin(angle)  *  ((16.0 + uSoundData/2.0)  + (cos(angle * uSoundData/2.0)))) * distanceToCenter) /10.0;
    modelPosition.z =  ((cos(angle) *   ((16.0 + uSoundData/2.0) + (cos(angle * uSoundData/2.0 )))) * distanceToCenter ) /10.0;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    gl_PointSize = uSize * aScale;
    gl_PointSize *=( 1.0 / -viewPosition.z);
}