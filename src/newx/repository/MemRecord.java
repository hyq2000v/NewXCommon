package newx.repository;

import org.apache.commons.collections.map.ListOrderedMap;

/**
 * MemRecordSet中使用的记录对象
 * @author huang
 */
public class MemRecord {

	private ListOrderedMap values = null;
	
	public MemRecord() {
		values = new ListOrderedMap();
	}
	
	public FieldValue field(int index) {
		Object value = values.getValue(index);
		if (value == null) {
			return null;
		} else {
			return (FieldValue)value;
		}
	}
	
	public FieldValue field(String fieldName) {
		Object value = values.get(fieldName);
		if (value == null) {
			return null;
		} else {
			return (FieldValue)value;
		}
	}
	
	public Object put(String fieldName, FieldValue fieldValue) {
		return values.put(fieldName, fieldValue);
	}
	
	public int getFieldCount() {
		return values.size();
	}
	
	public int getFieldIndex(String fieldName) {
		return values.indexOf(fieldName);
	}
}
