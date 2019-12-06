var searchIndex={};
searchIndex["psd"] = {"doc":"Data structures and methods for working with PSD files.","i":[[3,"PsdLayer","psd","Information about a layer in a PSD file.",null,null],[3,"Psd","","Represents the contents of a PSD file",null,null],[4,"PsdChannelCompression","","Indicates how a channe'sl data is compressed",null,null],[13,"RawData","","Not compressed",0,null],[13,"RleCompressed","","Compressed using PackBits RLE compression",0,null],[13,"ZipWithoutPrediction","","Currently unsupported",0,null],[13,"ZipWithPrediction","","Currently unsupported",0,null],[4,"PsdChannelKind","","The different kinds of channels in a layer (red, green,…",null,null],[13,"Red","","",1,null],[13,"Green","","",1,null],[13,"Blue","","",1,null],[13,"TransparencyMask","","",1,null],[13,"UserSuppliedLayerMask","","",1,null],[13,"RealUserSuppliedLayerMask","","",1,null],[4,"ColorMode","","Adobe Docs",null,null],[13,"Bitmap","","",2,null],[13,"Grayscale","","",2,null],[13,"Indexed","","",2,null],[13,"Rgb","","",2,null],[13,"Cmyk","","",2,null],[13,"Multichannel","","",2,null],[13,"Duotone","","",2,null],[13,"Lab","","",2,null],[4,"PsdDepth","","Adobe Docs",null,null],[13,"One","","",3,null],[13,"Eight","","",3,null],[13,"Sixteen","","",3,null],[13,"ThirtyTwo","","",3,null],[11,"new","","Create a new PsdLayerChannelCompression",0,[[["u16"]],[["psdchannelcompression"],["result",["psdchannelcompression","error"]],["error"]]]],[11,"new","","Create a new PsdLayerChannel",1,[[["i16"]],[["psdchannelkind"],["error"],["result",["psdchannelkind","error"]]]]],[11,"rgba_offset","","R -> 0 G -> 1 B -> 2 A -> 3",1,[[],[["error"],["result",["usize","error"]],["usize"]]]],[11,"new","","Create a new PsdDepth",3,[[["u8"]],[["error"],["result",["psddepth","error"]],["psddepth"]]]],[11,"new","","Create a new ColorMode",2,[[["u8"]],[["error"],["result",["colormode","error"]],["colormode"]]]],[11,"new","","Create a new photoshop layer",4,[[["u32"],["i32"],["string"]],["psdlayer"]]],[11,"name","","Get the name of the layer",4,[[["self"]],["str"]]],[11,"width","","The width of the layer",4,[[["self"]],["u16"]]],[11,"height","","The height of the layer",4,[[["self"]],["u16"]]],[11,"compression","","Get the compression level for one of this layer's channels",4,[[["psdchannelkind"],["self"]],[["psdchannelcompression"],["result",["psdchannelcompression","error"]],["error"]]]],[11,"rgba","","Create a vector that interleaves the red, green, blue and…",4,[[["self"]],[["result",["vec","error"]],["vec",["u8"]],["error"]]]],[11,"from_bytes","","Create a Psd from a byte slice.",5,[[],[["psd"],["error"],["result",["psd","error"]]]]],[11,"width","","The width of the PSD file",5,[[["self"]],["u32"]]],[11,"height","","The height of the PSD file",5,[[["self"]],["u32"]]],[11,"depth","","The number of bits per channel",5,[[["self"]],["psddepth"]]],[11,"color_mode","","The color mode of the file",5,[[["self"]],["colormode"]]],[11,"layers","","Get all of the layers in the PSD",5,[[["self"]],["vec"]]],[11,"layer_by_name","","Get a layer by name",5,[[["str"],["self"]],[["error"],["psdlayer"],["result",["psdlayer","error"]]]]],[11,"layer_by_idx","","Get a layer by index.",5,[[["self"],["usize"]],[["error"],["psdlayer"],["result",["psdlayer","error"]]]]],[11,"flatten_layers_rgba","","Given a filter, combine all layers in the PSD that pass…",5,[[["fn"],["self"]],[["result",["vec","error"]],["vec",["u8"]],["error"]]]],[11,"rgba","","Get the RGBA pixels for the PSD [ R,G,B,A, R,G,B,A,…",5,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"compression","","Get the compression level for the flattened image data",5,[[["self"]],["psdchannelcompression"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"clone","","",1,[[["self"]],["psdchannelkind"]]],[11,"clone","","",3,[[["self"]],["psddepth"]]],[11,"clone","","",2,[[["self"]],["colormode"]]],[11,"cmp","","",1,[[["psdchannelkind"],["self"]],["ordering"]]],[11,"eq","","",0,[[["self"],["psdchannelcompression"]],["bool"]]],[11,"eq","","",1,[[["psdchannelkind"],["self"]],["bool"]]],[11,"eq","","",3,[[["psddepth"],["self"]],["bool"]]],[11,"eq","","",2,[[["colormode"],["self"]],["bool"]]],[11,"partial_cmp","","",1,[[["psdchannelkind"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"hash","","",1,[[["self"],["__h"]]]]],"p":[[4,"PsdChannelCompression"],[4,"PsdChannelKind"],[4,"ColorMode"],[4,"PsdDepth"],[3,"PsdLayer"],[3,"Psd"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);