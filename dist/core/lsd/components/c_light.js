"use strict";function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}var CES=require("ces"),BABYLON=require("../lib/babylon"),utils=require("../utils/utils"),defaults=utils.defaultArgs();defaults._name="light";var c_light=function i(){var e=arguments.length<=0||void 0===arguments[0]?defaults:arguments[0];switch(_classCallCheck(this,i),this.name=e._name+utils.guid(),this.obj=null,e._type){case"Hemispheric":this.obj=new BABYLON.HemisphericLight(this.name,e._position,e._scene);break;case"Point":this.obj=new BABYLON.PointLight(this.name,e._position,e._scene);break;case"Directional":this.obj=new BABYLON.DirectionalLight(this.name,e._position,e._scene);break;default:this.obj=new BABYLON.HemisphericLight(this.name,e._position,e._scene)}console.log(e._position),this.options={name:this.name,init:this.constructor,obj:this.obj},CES.Component.extend(this.options)};module.exports=c_light;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19saWdodC5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJ1dGlscyIsImRlZmF1bHRzIiwiZGVmYXVsdEFyZ3MiLCJfbmFtZSIsImNfbGlnaHQiLCJfb3B0cyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRoaXMiLCJuYW1lIiwiZ3VpZCIsIm9iaiIsIl90eXBlIiwiSGVtaXNwaGVyaWNMaWdodCIsIl9wb3NpdGlvbiIsIl9zY2VuZSIsIlBvaW50TGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJpbml0IiwiY29uc3RydWN0b3IiLCJDb21wb25lbnQiLCJleHRlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxLQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxNQUFRRixRQUFRLGtCQUVoQkcsU0FBV0QsTUFBTUUsYUFDckJELFVBQVNFLE1BQVEsT0FhakIsSUFKTUMsU0FDTSxRQUROQSxLQUtMLEdBSllDLEdBQUtDLFVBQUFDLFFBQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFHTCxTQUFRSyxVQUFBLEVBRzNCLFFBR0RiLGdCQUFnQmdCLEtBUFhMLEdBRUpLLEtBQUtDLEtBQU9MLEVBQU1GLE1BQVFILE1BQU1XLE9BQ2hDRixLQUFLRyxJQUFNLEtBQ0pQLEVBQU1RLE9BQ1QsSUFBSyxjQUNESixLQUFLRyxJQUFLLEdBQUliLFNBQVFlLGlCQUFpQkwsS0FBS0MsS0FBT0wsRUFBTVUsVUFBWVYsRUFBTVcsT0FDM0UsTUFDSixLQUFLLFFBQ1BQLEtBQUtHLElBQU0sR0FBSWIsU0FBUWtCLFdBQVdSLEtBQUtDLEtBQU9MLEVBQU1VLFVBQVlWLEVBQU1XLE9BQ2hFLE1BQ0osS0FBSyxjQUNBUCxLQUFLRyxJQUFNLEdBQUliLFNBQVFtQixpQkFBaUJULEtBQUtDLEtBQU9MLEVBQU1VLFVBQVlWLEVBQU1XLE9BQzdFLE1BQ0osU0FDSVAsS0FBS0csSUFBSyxHQUFJYixTQUFRZSxpQkFBaUJMLEtBQUtDLEtBQU9MLEVBQU1VLFVBQVlWLEVBQU1XLFFBRWxGRyxRQUFRQyxJQUFLZixFQUFNVSxXQUNwQk4sS0FBS1ksU0FDSlgsS0FBS0QsS0FBS0MsS0FDVlksS0FBTWIsS0FBS2MsWUFDWFgsSUFBSUgsS0FBS0csS0FFVmYsSUFBSTJCLFVBQVVDLE9BQU9oQixLQUFLWSxTQUk1QkssUUFBT0MsUUFBVXZCIiwiZmlsZSI6ImNvcmUvbHNkL2NvbXBvbmVudHMvY19saWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDRVMgPSByZXF1aXJlKCdjZXMnKTtcbnZhciBCQUJZTE9OID0gcmVxdWlyZSgnLi4vbGliL2JhYnlsb24nKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzJyk7XG5cbnZhciBkZWZhdWx0cyA9IHV0aWxzLmRlZmF1bHRBcmdzKCk7XG5kZWZhdWx0cy5fbmFtZSA9ICdsaWdodCc7XG5cbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG5cbmNsYXNzIGNfbGlnaHQge1xuXHRjb25zdHJ1Y3Rvcihfb3B0cyA9IGRlZmF1bHRzKXtcblx0XHR0aGlzLm5hbWUgPSBfb3B0cy5fbmFtZSArIHV0aWxzLmd1aWQoKTtcblx0XHR0aGlzLm9iaiA9IG51bGw7XG5cdFx0c3dpdGNoKF9vcHRzLl90eXBlKSB7XG5cdFx0ICAgIGNhc2UgJ0hlbWlzcGhlcmljJzpcblx0XHQgICAgICAgIHRoaXMub2JqPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KHRoaXMubmFtZSwgIF9vcHRzLl9wb3NpdGlvbiwgIF9vcHRzLl9zY2VuZSk7XG5cdFx0ICAgICAgICBicmVhaztcblx0XHQgICAgY2FzZSAnUG9pbnQnOlxuXHRcdFx0XHR0aGlzLm9iaiA9IG5ldyBCQUJZTE9OLlBvaW50TGlnaHQodGhpcy5uYW1lLCAgX29wdHMuX3Bvc2l0aW9uLCAgX29wdHMuX3NjZW5lKTtcblx0XHQgICAgICAgIGJyZWFrO1xuXHRcdCAgICBjYXNlICdEaXJlY3Rpb25hbCc6XG5cdFx0ICAgICAgICAgdGhpcy5vYmogPSBuZXcgQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0KHRoaXMubmFtZSwgIF9vcHRzLl9wb3NpdGlvbiwgIF9vcHRzLl9zY2VuZSk7XG5cdFx0ICAgICAgICBicmVhaztcdFx0ICAgICAgICBcblx0XHQgICAgZGVmYXVsdDpcblx0XHQgICAgICAgIHRoaXMub2JqPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KHRoaXMubmFtZSwgIF9vcHRzLl9wb3NpdGlvbiwgIF9vcHRzLl9zY2VuZSk7XG5cdFx0IH1cblx0XHQgY29uc29sZS5sb2coIF9vcHRzLl9wb3NpdGlvbik7XG5cdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0bmFtZTp0aGlzLm5hbWUgLFxuXHRcdFx0aW5pdDogdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHRcdG9iajp0aGlzLm9ialxuXHRcdH1cblx0XHRDRVMuQ29tcG9uZW50LmV4dGVuZCh0aGlzLm9wdGlvbnMpO1xuXHR9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gY19saWdodDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=